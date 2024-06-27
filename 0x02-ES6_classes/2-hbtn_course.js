export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string.');
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number.');
    }

    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array.');
    }
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string.');
    }
  }

  getLength() {
    return this._length;
  }

  setLength(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number.');
    }
  }

  getStudents() {
    return this._students;
  }

  setStudents(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array.');
    }
  }
}
