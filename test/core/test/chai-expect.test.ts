/* eslint-disable ts/no-unused-expressions */
import { describe, expect, it } from 'vitest'

class TestError extends Error {}

// For expect.extend
interface CustomMatchers<R = unknown> {
  toBeDividedBy: (divisor: number) => R
  toBeTestedAsync: () => Promise<R>
  toBeTestedSync: () => R
  toBeTestedPromise: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

declare global {
  // eslint-disable-next-line ts/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeJestCompatible: () => R
    }
  }
}

describe('chai-expect', () => {
  it('equal', () => {
    expect(1).to.equal(1)
    expect(1).not.to.equal(2)

    const stock = {
      type: 'apples',
    }
    const refStock = stock
    expect(stock).to.equal(refStock)
    expect(stock).not.to.equal({ type: 'apples' })
  })

  it('closeTo', () => {
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
})
