/**
 * @param {string} attempt
 * @returns {boolean}
 */
export function isAValidAttempt (attempt) {
  let alreadyHasALetter = false
  let lastLetter = ''
  let lastDigit = ''

  for (const char of attempt) {
    if (/[a-z]/g.test(char)) {
      alreadyHasALetter = true
      if (char < lastLetter) return false
      lastLetter = char
    } else if (/\d/.test(char)) {
      if (alreadyHasALetter || char < lastDigit) return false
      lastDigit = char
    }
  }

  return true
}

/**
 * @param {string} attempts
 * @returns {string}
 */
export function getValidAndInvalidAttemptsCount (attempts) {
  let validCount = 0
  let invalidCount = 0

  const attemptsList = attempts.split('\n')

  for (const attempt of attemptsList) {
    isAValidAttempt(attempt.trim())
      ? validCount++
      : invalidCount++
  }

  return `submit ${validCount}true${invalidCount}false`
}
