import { v4 } from 'uuid'

/**
 * Identifies an entity.
 */
export class Identity<TType, Brand> {
  /**
   * Initialize the new instance of the Identity class
   * @param id Value.
   */
  constructor(private id: TType) { }

  /**
   * Gets the value of the Identity
   */
  get value(): TType {
    return this.id
  }

  /**
   * Compare the Identity to another Identity.
   * @param other Identity to compare to.
   * @returns True if the Identity is equal to the other Identity.
   */
  equals(other: Identity<TType, Brand>): boolean {
    return this.value === other.value
  }

  /**
   * Identity brand
   */
  private __brand__: Brand
}


/**
 * UUID Identitiy
 */
export class UuidIdentity<Brand extends string> extends Identity<string, Brand> {
  constructor(id?: string) { super(id || v4()) }
}
