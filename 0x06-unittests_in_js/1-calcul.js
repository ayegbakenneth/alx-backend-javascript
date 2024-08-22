const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let firstNumber = Number(a);
  let secondNumber = Number(b);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  firstNumber = Math.round(firstNumber);
  secondNumber = Math.round(secondNumber);

  switch (type) {
    case SUM:
      return firstNumber + secondNumber;
    case SUBTRACT:
      return firstNumber - secondNumber;
    case DIVIDE:
      if (secondNumber === 0) return 'ERROR';
      const quotient = firstNumber / secondNumber;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
