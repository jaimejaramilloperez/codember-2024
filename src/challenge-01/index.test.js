import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { unlockTheTerminal } from './index.js'

describe('Challenge #01 - Get access to the terminal!', () => {
  it('Test #01 - unlockTheTerminal("000", "URURD")', () => {
    const result = unlockTheTerminal('000', 'URURD')
    assert.strictEqual(result, 'submit 119')
  })

  it('Test #02 - unlockTheTerminal("1111", "UUURUUU")', () => {
    const result = unlockTheTerminal('1111', 'UUURUUU')
    assert.strictEqual(result, 'submit 4411')
  })

  it('Test #03 - unlockTheTerminal("9999", "LULULULD")', () => {
    const result = unlockTheTerminal('9999', 'LULULULD')
    assert.strictEqual(result, 'submit 8000')
  })

  it('Test #04 - unlockTheTerminal("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR")', () => {
    const result = unlockTheTerminal('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR')
    assert.strictEqual(result, 'submit 628934712834')
  })
})
