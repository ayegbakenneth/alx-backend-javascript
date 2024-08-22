const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let investigator;

  beforeEach(() => {
    if (!investigator) {
      investigator = sinon.spy(console);
    }
  });

  afterEach(() => {
    investigator.log.resetHistory();
  });

  it("The total is: 120", () => {
    sendPaymentRequestToApi(100, 20);
    expect(investigator.log.calledWith('The total is: 120')).to.be.true;
    expect(investigator.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(investigator.log.calledWith('The total is: 20')).to.be.true;
    expect(investigator.log.calledOnce).to.be.true;
  });
});
