import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { join } from 'node:path'
import { readFileSync } from 'node:fs'

import { calculateOmegaSteps } from './index.js'

describe('Challenge #03 - Following the trail of AI ΩMEGA!', () => {
  it('Test #01 - calculateOmegaSteps("1 2 4 1 -2")', () => {
    const result = calculateOmegaSteps('1 2 4 1 -2')
    assert.strictEqual(result, 'submit 5-5')
  })

  it('Test #02 - calculateOmegaSteps("0 1 2 3 -1")', () => {
    const result = calculateOmegaSteps('0 1 2 3 -1')
    assert.strictEqual(result, 'submit 6-6')
  })

  it('Test #03 - calculateOmegaSteps("1 -2 5")', () => {
    const result = calculateOmegaSteps('1 -2 5')
    assert.strictEqual(result, 'submit 2-2')
  })

  it('Test #04 - calculateOmegaSteps(instructions)', () => {
    const FILE_NAME = 'trace.txt'
    const path = join(import.meta.dirname, FILE_NAME)
    const instructions = readFileSync(path, { encoding: 'utf-8' })

    const result = calculateOmegaSteps(instructions)
    assert.strictEqual(result, 'submit 453-15')
  })
})
