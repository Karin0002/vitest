/* eslint-disable ts/no-unused-expressions */
import { describe, expect, it } from 'vitest'

describe('chai-expect', () => {
  it('toBe', () => {
    expect(1).to.equal(1)
    expect(1).not.to.equal(2)

    const stock = {
      type: 'apples',
    }
    const refStock = stock
    expect(stock).to.equal(refStock)
    expect(stock).not.to.equal({ type: 'apples' })
  })

  it('toBeCloseTo', () => {
    expect(0.2 + 0.1).to.be.closeTo(0.3, 1)
    expect(2 + 1).not.to.be.closeTo(2, 0.5)
  })

  it('toBeDefined and toBeUndefined', () => {
    expect(undefined).to.be.undefined
    expect(1).to.not.be.undefined
  })

  it('toBeTruthy', () => {
    expect(1).to.be.ok
    expect(true).to.be.ok
    expect('a').to.be.ok
  })

  it('toBeFalsy', () => {
    expect(0).not.to.be.ok
    expect(false).not.to.be.ok
    expect(undefined).not.to.be.ok
  })

  it('toBeNull', () => {
    expect(null).to.be.null
    expect(1).not.to.be.null
  })

  it('toBeNaN', () => {
    expect(Number.NaN).to.be.NaN
    expect(1).not.to.be.NaN
  })

  it('toBeTypeOf', () => {
    expect(BigInt(1)).to.be.a('bigint')
    expect(true).to.be.a('boolean')
    expect(() => {}).to.be.a('function')
    expect(1).to.be.a('number')
    expect({}).to.be.a('object')
    expect('a').to.be.a('string')
    expect(Symbol('a')).to.be.a('symbol')
    expect(undefined).to.be.a('undefined')
  })

  it('toBeInstanceOf', () => {
    class Animal {}
    const animal = new Animal()
    class Plant {}

    expect(animal).to.be.an.instanceof(Animal)
    expect(animal).not.to.be.an.instanceof(Plant)
  })

  it('toBeGreaterThan', () => {
    expect(2).to.be.above(1)
    expect(2).not.to.be.above(2)
  })

  it('toBeGreaterThanOrEqual', () => {
    expect(2).to.be.least(1)
    expect(2).to.be.least(2)
    expect(2).not.to.be.least(3)
  })

  it('toBeLessThan', () => {
    expect(1).to.be.below(2)
    expect(1).not.to.be.below(1)
  })

  it('toBeLessThanOrEqual', () => {
    expect(1).to.be.most(2)
    expect(1).to.be.most(1)
    expect(2).not.to.be.most(1)
  })
})
