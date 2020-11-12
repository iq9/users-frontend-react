import moment from 'moment'
// Would not use Moment.js in the future. Too large for a client-side lib.
// There are competing libraries that are 1/10th the size. Sometimes you
// have to go with the "devil you know" to get thing done rapidly.

/**
 * @param {string} dateA - a date, represented in string format
 * @param {string} dateB - a date, represented in string format
 */
const dateSort = (dateA, dateB) => moment(dateA).diff(moment(dateB))

/**
 *
 * @param {number|string} a
 * @param {number|string} b
 */
const defaultSort = (a, b) => {
  if (a < b) return -1
  if (b < a) return 1
  return 0
}

const Sorter = {
  DEFAULT: defaultSort,
  DATE: dateSort,
}

export default Sorter