export default function setFromArray(array) {
  const recievedArray = array;
  const newArray = new Set(recievedArray);
  return newArray;
}
