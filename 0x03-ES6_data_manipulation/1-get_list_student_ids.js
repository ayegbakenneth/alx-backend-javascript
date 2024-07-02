import getListStudents from './0-get_list_students';

export default function getListStudentIds(ten) {
  const ids = ten;
  if (!Array.isArray(ids)) {
    return [];
  }
  return ids.map((object) => object.id);
}
