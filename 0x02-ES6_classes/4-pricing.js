import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  getAmount() {
    return this._amount;
  }

  setAmount(amount) {
    this._amount = amount;
  }

  getCurrency() {
    return this._currency;
  }

  setCurrency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.getName()} (${this._currency.getCode()})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
