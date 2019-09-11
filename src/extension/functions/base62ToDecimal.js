import globals from '../globals'

const base62ToDecimal = number => {
  number = number.toString()
  const cachePosition = {}
  let result = 0
  let power = 1
  for (let i = number.length - 1; i >= 0; i--) {
    const character = number[i]
    if (typeof cachePosition[character] === 'undefined') {
      cachePosition[character] = globals.alphabet.indexOf(character)
    }
    result += power * cachePosition[character]
    power *= 62
  }
  return result
}

export default base62ToDecimal
