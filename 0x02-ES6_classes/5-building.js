export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static get [Symbol.species]() {
    return this;
  }

  evacuationWarningMessage() {
    throw new this.Error('Class extending Building must override evacuationWarningMessage');
  }
}
