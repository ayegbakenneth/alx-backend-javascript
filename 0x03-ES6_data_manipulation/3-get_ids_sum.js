export default function getStudentIdsSum(objectId) {
  return objectId.reduce((addSum, object) => addSum += object.id, 0);
}
