export default class HolbertonCourse {
  constructor() {
    this._name = '';
    this._length = 0;
    this._students = [];
  }

  getName() {
    if (this._name === '') {
      return this._name;
    }
    throw new Error('Name must be a string');
  }

  getLength() {
    if (this._length >= 0) {
      return this._length;
    }
    throw new Error('Length must be a number');
  }

  getStudents() {
    if (this._students.length === 0) {
      return this._students;
    }
    throw new Error('Students must be an array of strings');
  }

  setName(newName) {
    if (newName === '') {
      this._name = newName;
      return;
    }
    throw new Error('Name must be a string');
  }

  setLength(newLength) {
    if (newLength >= 0) {
      this._length = newLength;
      return;
    }
    throw new Error('Length must be a number');
  }

  setStudents(newStudents) {
    if (newStudents.length === 0) {
      this._students = newStudents;
      return;
    }
    throw new Error('Students not valid');
  }
}
