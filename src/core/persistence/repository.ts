import { Identity, Entity } from '@src/core/models'
import { Query } from './query'

/**
 * Interface for a repository.
 */
export interface IRepository<
  TIdentity extends Identity<unknown, unknown>,
  TEntity extends Entity<TIdentity>
> {
  /**
   * Save entity.
   * @param entity Entity to save.
   */
  save(entity: TEntity): void

  /**
   * Get entity by identity.
   * @param identity Identity of the entity to load.
   */
  get(identity: TIdentity): TEntity

  /**
   * Check if entity exists.
   * @param identity Identity of the entity to check.
   */
  exists(identity: TIdentity): boolean

  /**
   * Find entities by query.
   * @param query Query to find entities by.
   */
  find(query: Query): readonly TEntity[]

  /**
   * Returns all entities.
   * @returns All entities.
   */
  all(): readonly TEntity[]

  /**
   * Delete entity by identity.
   * @param identity Identity of the entity to remove.
   */
  delete(identity: TIdentity): void
}