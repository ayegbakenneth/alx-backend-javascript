import getListStudents from './0-get_list_students.js';

export default function getStudentsByLocation(list, city) {
  return list.filter((student) => student.location === city);
}
