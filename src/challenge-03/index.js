/**
 * @param {string} instructionList
 * @returns {number}
 */
export function countSteps (instructionList) {
  const parsedInstructions = instructionList.split(' ').map(Number)

  let position = 0
  let steps = 0

  while (position >= 0 && position < parsedInstructions.length) {
    const currentInstruction = parsedInstructions[position]
    parsedInstructions[position]++
    position += currentInstruction
    steps++
  }

  return steps
}

/**
 * @param {string} instructions
 * @returns {string}
 */
export function calculateOmegaSteps (instructions) {
  let totalSteps = 0
  let latestResult = 0

  const instructionsList = instructions.split('\n')

  for (const instructionList of instructionsList) {
    latestResult = countSteps(instructionList)
    totalSteps += latestResult
  }

  return `submit ${totalSteps}-${latestResult}`
}
