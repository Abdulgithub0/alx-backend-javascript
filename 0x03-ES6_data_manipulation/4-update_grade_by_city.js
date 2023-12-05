export default function updateStudentGradeByCity(students, city, newgrade ) {
  const studentByCity = students.filter((obj) => obj.location === city);
  //console.log(studentByCity);
  return studentByCity.map((obj) => {
    newgrade.forEach();
    obj['grade'] = sameid[0].grade;
  });
}
