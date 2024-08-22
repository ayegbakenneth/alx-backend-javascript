const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const combinedTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${combinedTotal}`);
};

module.exports = sendPaymentRequestToApi;
