export default function getStudentIdsSum(listOfStudent) {
  return listOfStudent.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
