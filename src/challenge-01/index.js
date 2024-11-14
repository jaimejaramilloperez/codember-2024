/**
 * @param {string[]} numbers
 * @param {string[]} movements
 */
export function unlockTheTerminal (numbers, movements) {
  const keys = numbers.split('').map(Number)
  const maxKeyIndex = keys.length - 1
  let currentKeyIndex = 0

  for (const movement of movements) {
    if (movement === 'R') {
      currentKeyIndex = currentKeyIndex === maxKeyIndex ? 0 : currentKeyIndex + 1
    } else if (movement === 'L') {
      currentKeyIndex = currentKeyIndex === 0 ? maxKeyIndex : currentKeyIndex - 1
    } else if (movement === 'U') {
      keys[currentKeyIndex] = keys[currentKeyIndex] === 9 ? 0 : keys[currentKeyIndex] + 1
    } else if (movement === 'D') {
      keys[currentKeyIndex] = keys[currentKeyIndex] === 0 ? 9 : keys[currentKeyIndex] - 1
    }
  }

  return `submit ${keys.join('')}`
}
