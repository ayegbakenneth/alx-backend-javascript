import ClassRoom from './0-classroom';

function initializeRooms() {
  const numbers = [19, 20, 34];
  const classrooms = numbers.map((numbers) => new ClassRoom(numbers));
  return classrooms;
}

export default initializeRooms;
