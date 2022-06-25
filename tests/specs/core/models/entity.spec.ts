import { Entity, Identity } from '@src/core/models'

class FakeEntity extends Entity<Identity<string, 'string'>> {
  constructor(id: string) { super(new Identity(id)) }
}

describe('Entity', () => {

  /* -------------------------------------------------------------------------- */
  /*                                  identity                                  */
  /* -------------------------------------------------------------------------- */

  describe('.identity', () => {
    it('returns the identity', () => {
      const entity = new FakeEntity('123')
      expect(entity.identity.value).toBe('123')
    })
  })

  /* -------------------------------------------------------------------------- */
  /*                                   equals                                   */
  /* -------------------------------------------------------------------------- */

  describe('.equals()', () => {
    it('returns true when the id is equal to the other id', () => {
      const entity1 = new FakeEntity('123')
      const entity2 = new FakeEntity('123')
      expect(entity1.equals(entity2)).toBeTruthy()
    })

    it('returns false when the id is not equal to the other id', () => {
      const entity1 = new FakeEntity('123')
      const entity2 = new FakeEntity('qwe')
      expect(entity1.equals(entity2)).toBeFalsy()
    })
  })
})