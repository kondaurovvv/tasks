// 'use strict'

import { isNull, isNumber } from '../task1.js'

console.log('task1')

describe('isNull Проверяет, является ли переданное значение строго равным `null`.', () => {
  it('Проверяем, что null строго равно null', () => {
    // AAA - arrange, act, assert
    const expectedResult = true

    const actualResult = isNull(null)

    expect(actualResult).toBe(expectedResult)
  })

  it('Проверяем, что null строго равно `Гость`', () => {
    const expectedResult = false

    const actualResult = isNull(`Гость`)

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что null строго равно `Имя`', () => {
    const expectedResult = false

    const actualResult = isNull(`Имя`)

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что null строго равно ``', () => {
    const expectedResult = false

    const actualResult = isNull('')

    expect(expectedResult).toBe(actualResult)
  })
})

describe('isNumber Проверяет, является ли переданное значение типом `number`.', () => {
  it('Проверяем, что тип `number` строго равно -1', () => {
    const expectedResult = true

    const actualResult = isNumber('-1')

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что тип `number` строго равно 0', () => {
    const expectedResult = true

    const actualResult = isNumber('0')

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что тип `number` строго равно 1', () => {
    const expectedResult = true

    const actualResult = isNumber('1')

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что тип `number` строго равно ``', () => {
    const expectedResult = false

    const actualResult = isNumber(``)

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что тип `number` строго равно `asd`', () => {
    const expectedResult = false

    const actualResult = isNumber(`asd`)

    expect(expectedResult).toBe(actualResult)
  })

  it('Проверяем, что тип `number` строго равно null', () => {
    const expectedResult = false

    const actualResult = isNumber(null)

    expect(expectedResult).toBe(actualResult)
  })
})
