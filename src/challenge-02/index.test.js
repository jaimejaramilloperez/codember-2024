import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { join } from 'node:path'
import { readFileSync } from 'node:fs'

import { getValidAndInvalidAttemptsCount } from './index.js'

describe('Challenge #02 - Detecting unauthorized access', () => {
  it('Test #01 - getValidAndInvalidAttemptsCount("1234")', () => {
    const result = getValidAndInvalidAttemptsCount('1234')
    assert.strictEqual(result, 'submit 1true0false')
  })

  it('Test #02 - getValidAndInvalidAttemptsCount("abc")', () => {
    const result = getValidAndInvalidAttemptsCount('abc')
    assert.strictEqual(result, 'submit 1true0false')
  })

  it('Test #03 - getValidAndInvalidAttemptsCount("aabbcc")', () => {
    const result = getValidAndInvalidAttemptsCount('aabbcc')
    assert.strictEqual(result, 'submit 1true0false')
  })

  it('Test #04 - getValidAndInvalidAttemptsCount("112233")', () => {
    const result = getValidAndInvalidAttemptsCount('112233')
    assert.strictEqual(result, 'submit 1true0false')
  })

  it('Test #05 - getValidAndInvalidAttemptsCount("a123")', () => {
    const result = getValidAndInvalidAttemptsCount('a123')
    assert.strictEqual(result, 'submit 0true1false')
  })

  it('Test #06 - getValidAndInvalidAttemptsCount("123abc")', () => {
    const result = getValidAndInvalidAttemptsCount('123abc')
    assert.strictEqual(result, 'submit 1true0false')
  })

  it('Test #07 - getValidAndInvalidAttemptsCount("dbce")', () => {
    const result = getValidAndInvalidAttemptsCount('dbce')
    assert.strictEqual(result, 'submit 0true1false')
  })

  it('Test #08 - getValidAndInvalidAttemptsCount(attempts)', () => {
    const FILE_NAME = 'log.txt'
    const path = join(import.meta.dirname, FILE_NAME)
    const attempts = readFileSync(path, { encoding: 'utf-8' })

    const result = getValidAndInvalidAttemptsCount(attempts)
    assert.strictEqual(result, 'submit 299true198false')
  })
})
