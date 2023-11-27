/* @description Convert a value (like 4500) to a shorthand USD display string ($4.5k)
 *
 * @note This is always formatted in the en-US locale, because otherwise my hacknology could break.
 *
 * @param {number|string} value A numerical value to format
 * @param {decimal|boolean} whether to include decimal point even if its greater than a unit value
 */

export function formatCurrencyShorthand(value, options) {
  const decimal = (options && options.decimal) || true
  const showLevel = options ? (options.showLevel === undefined ? true : options.showLevel) : true
  const levels = options && options.levels ? options.levels : ['', 'K', 'M', 'B']

  // reduce value down to dollars, thousands, or millions of dollars
  let number = Number(value)
  let levelIndex = 0

  while (Math.abs(number) >= 1000) {
    number = number / 1000.0
    levelIndex += 1
  }
  const level = levels[levelIndex]

  const maximumDigits = Math.abs(number) < 1 ? 1 : 0

  // format the result as a dollar value
  const formatter = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: Math.abs(number) > 100 ? 0 : decimal ? 2 : maximumDigits,
    useGrouping: false
  })

  if (showLevel) {
    // return the result with appropriate dollar value
    return `${formatter.format(number)}${level}`
  }

  return formatter.format(number)
}
