const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const investigator = sinon.spy(console);
    const disguised = sinon.stub(Utils, 'calculateNumber');

    disguised.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(disguised.calledWith('SUM', 100, 20)).to.be.true;
    expect(disguised.callCount).to.be.equal(1);
    expect(investigator.log.calledWith('The total is: 10')).to.be.true;
    expect(investigator.log.callCount).to.be.equal(1);
    disguised.restore();
    investigator.log.restore();
  });
});
