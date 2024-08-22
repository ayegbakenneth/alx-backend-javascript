const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('calculateNumber function of Utils in sendPaymentRequestToApi', () => {
    const disguised = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(disguised.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(disguised.calculateNumber.callCount).to.be.equal(1);
    disguised.calculateNumber.restore();
  });
});
