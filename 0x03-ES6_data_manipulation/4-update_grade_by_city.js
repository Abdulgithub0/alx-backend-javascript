export default function updateStudentGradeByCity(students, city, newgrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  return studentsByCity.map((student) => {
    const matchingGrade = newgrades.find((grade) => grade.studentId === student.id);
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    return student;
  });
}
