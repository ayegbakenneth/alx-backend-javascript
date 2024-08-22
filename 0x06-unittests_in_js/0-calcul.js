module.exports = function calculateNumber(a, b = 0) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber))
    throw TypeError('Entered agrguments must be numbers');

  return Math.round(firstNumber) + Math.round(secondNumber);
};
