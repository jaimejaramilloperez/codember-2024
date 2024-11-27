import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import { join } from 'node:path'
import { readFileSync } from 'node:fs'

import { getSafeNodes } from './index.js'

describe('Challenge #04 - Avoiding Chaos in the Network', () => {
  it('Test #01 - getSafeNodes([[1, 2], [2, 3], [4, 5]])', () => {
    const result = getSafeNodes([[1, 2], [2, 3], [4, 5]])
    assert.strictEqual(result, 'submit 4,5')
  })

  it('Test #02 - getSafeNodes([[1, 2], [2, 3], [3, 4]])', () => {
    const result = getSafeNodes([[1, 2], [2, 3], [3, 4]])
    assert.strictEqual(result, 'submit ')
  })

  it('Test #03 - getSafeNodes([[4, 6], [7, 9], [10, 12], [12, 16]])', () => {
    const result = getSafeNodes([[4, 6], [7, 9], [10, 12], [12, 16]])
    assert.strictEqual(result, 'submit 4,6,7,9')
  })

  it('Test #04 - getSafeNodes(network)', () => {
    const FILE_NAME = 'network.txt'
    const path = join(import.meta.dirname, FILE_NAME)
    const network = readFileSync(path, { encoding: 'utf-8' })

    const result = getSafeNodes(JSON.parse(network))
    assert.strictEqual(result, 'submit 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196')
  })
})
