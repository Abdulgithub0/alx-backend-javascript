export default function getStudentsByLocation(listOfStudent, location) {
  return listOfStudent.filter((obj) => obj.location === location);
}
