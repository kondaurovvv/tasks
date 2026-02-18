'use strict'

import { isNull, isNotNull } from '../task1.js'

console.log('task1')

describe('isNull', () => {
  describe('Проверяет, является ли переданное значение строго равным `null`.', () => {
    it('Проверяем, что null равно null', () => {
      // AAA - arrange, act, assert
      const expectedResult = true

      const actualResult = isNull(null)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно 0', () => {
      const expectedResult = false

      const actualResult = isNull(0)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно 1', () => {
      const expectedResult = false

      const actualResult = isNull(1)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно NaN', () => {
      const expectedResult = false

      const actualResult = isNull(NaN)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно undefined', () => {
      const expectedResult = false

      const actualResult = isNull(undefined)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно ``', () => {
      const expectedResult = false

      const actualResult = isNull('')

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно `asd`', () => {
      const expectedResult = false

      const actualResult = isNull('asd')

      expect(actualResult).toBe(expectedResult)
    })
  })
})

describe('isNotNull', () => {
  describe('Проверяет, является ли переданное значение строго не равным `null`.', () => {
    it('Проверяем, что null равно null', () => {
      // AAA - arrange, act, assert
      const expectedResult = false

      const actualResult = isNotNull(null)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно 0', () => {
      const expectedResult = true

      const actualResult = isNotNull(0)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно 1', () => {
      const expectedResult = true

      const actualResult = isNotNull(1)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно NaN', () => {
      const expectedResult = true

      const actualResult = isNotNull(NaN)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно undefined', () => {
      const expectedResult = true

      const actualResult = isNotNull(undefined)

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно ``', () => {
      const expectedResult = true

      const actualResult = isNotNull('')

      expect(actualResult).toBe(expectedResult)
    })

    it('Проверяем, что null не равно `asd`', () => {
      const expectedResult = true

      const actualResult = isNotNull('asd')

      expect(actualResult).toBe(expectedResult)
    })
  })
})
