/**
 * This is to calculate the angle at which Hour hand will rotate
 * @param {Date} date
 * @returns {Number} angle
 */
export function getHourHandRotationAngle(date) {
  return date.getHours() * 30 + (date.getMinutes() / 60) * 30;
}

/**
 * This is to calculate the angle at which Minute hand will rotate
 * @param {Date} date
 * @returns {Number} angle
 */
export function getMinuteHandRotationAngle(date) {
  return date.getMinutes() * 6;
}

/**
 * This is to calculate the angle at which Second hand will rotate
 * @param {Date} date
 * @returns {Number} angle
 */
export function getSecondHandRotationAngle(date) {
  return date.getSeconds() * 6;
}
