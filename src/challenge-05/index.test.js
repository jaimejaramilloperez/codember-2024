import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { findOmega } from './index.js'

describe('Challenge #05 - Find ΩMEGA!', () => {
  it('Test #01 - findOmega(networkNodes)', () => {
    const networkNodes = [
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 71, 72, 73, 74, 75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 85, 86, 87, 88, 155, 156, 157, 158, 175,
      176, 177, 178, 179, 180, 181, 182, 183, 184, 195, 196
    ]
    const result = findOmega(networkNodes)
    assert.strictEqual(result, 'submit 7-43')
  })
})
