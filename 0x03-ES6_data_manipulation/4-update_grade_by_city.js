export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentGradeInfo = students.map((student) => {
    const studentsGrades = newGrades.find((grades) => grades.studentId === student.id);
    return { ...student, grade: studentsGrades ? studentsGrades.grade : 'N/A' };
  });
  const newStudentInfo = studentGradeInfo.filter((student) => student.location === city);
  return newStudentInfo;
}
