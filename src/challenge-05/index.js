/**
 * @param {number} number
 * @returns {boolean}
 */
export function isPrime (number) {
  if (number === 2) return true
  if (number < 2 || number % 2 === 0) return false

  const maxDivider = Math.floor(Math.sqrt(number)) + 1

  for (let i = 3; i < maxDivider; i += 2) {
    if (number % i === 0) return false
  }

  return true
}

/**
 * @param {number[]} networkNodes
 * @returns {string}
 */
export function findOmega (networkNodes) {
  const TARGET_POSITION = 2
  const validNodes = []

  for (const node of networkNodes) {
    const sumOfDigits = node.toString().split('').reduce((acc, val) => acc + Number(val), 0)

    if (isPrime(node) && isPrime(sumOfDigits)) {
      validNodes.push(node)
    }
  }

  return `submit ${validNodes.length}-${validNodes[TARGET_POSITION]}`
}
