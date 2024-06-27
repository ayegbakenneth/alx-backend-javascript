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
    throw new Error('Name not valid');
  }

  getLength() {
    if (this._length >= 0) {
      return this._length;
    }
    throw new Error('Length not valid');
  }

  getStudents() {
    if (this._students.length === 0) {
      return this._students;
    }
    throw new Error('Students not valid');
  }

  setName(newName) {
    if (newName === '') {
      this._name = newName;
      return;
    }
    throw new Error('Name not valid');
  }

  setLength(newLength) {
    if (newLength >= 0) {
      this._length = newLength;
      return;
    }
    throw new Error('Length not valid');
  }

  setStudents(newStudents) {
    if (newStudents.length === 0) {
      this._students = newStudents;
      return;
    }
    throw new Error('Students not valid');
  }
}
