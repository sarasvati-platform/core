import { Entity, Identity } from '@src/core/models'
import { Expression, Operator, Predicate } from '@src/core/persistence/query'
import { IRepository } from '@src/core/persistence/repository'

export class FakeRepository<
  TIdentity extends Identity<unknown, unknown>,
  TEntity extends Entity<TIdentity>
> implements IRepository<TIdentity, TEntity> {
  private entities: Map<TIdentity, TEntity> = new Map()

  save(entity: TEntity): void {
    this.entities.set(entity.identity, entity)
  }

  get(identity: TIdentity): TEntity {
    const entity = this.entities.get(identity)
    if (!entity) { throw new Error('Entity not found.') }
    return entity
  }

  exists(identity: TIdentity): boolean {
    return this.entities.has(identity)
  }

  find(query: Expression): readonly TEntity[] {
    const o = Array.from(this.entities.values())

    if (query instanceof Predicate) {
      if (query.operator === '=') { return o.filter(x => this.getFieldValue(query.field, x) === query.value) }
      if (query.operator === '<') { return o.filter(x => this.getFieldValue(query.field, x) < query.value) }
      if (query.operator === '>') { return o.filter(x => this.getFieldValue(query.field, x) > query.value) }
      if (query.operator === 'in') {
        const getRealValues = (f, e) => {
          const options = (query as Predicate).options
          let values = this.getFieldValue(f, e)
          if (options.includes('ci'))   { values = values.map(x => x?.toLowerCase()) }
          if (options.includes('like')) { values = values.flatMap(x => x?.split(' ')) }
          return values
        }
        const getRealQueryValue = (v) => {
          if (query.options.includes('ci')) { return v?.toLowerCase() }
        }
        const qv = getRealQueryValue(query.value)
        return o.filter(x => getRealValues(query.field, x).includes(qv))
      }
    } else if (query instanceof Operator) {
      if (query.operator === 'and') {
        const arrays = query.expressions.map(e => this.find(e as Predicate))
        return arrays.reduce((a, b) => a.filter(ele => b.includes(ele)))
      } else if (query.operator === 'or') {
        return [...new Set(query.expressions.flatMap(e => this.find(e as Predicate)))]
      }
      // if (q.operator === 'or') { return q.expressions.reduce((a, b) => a.concat(fetch(b, a)), o) }
      // if (q.operator === 'not') { return o.filter(x => !fetch(q.expressions[0], [x]).length) }
    }
    return []
  }

  all(): readonly TEntity[] {
    return Array.from(this.entities.values())
  }

  delete(identity: TIdentity): void {
    this.entities.delete(identity)
  }

  protected getFieldValue(f: string, o: TEntity) {
    return o[f]
  }
}