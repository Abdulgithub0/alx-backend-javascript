export default function getListStudentIds (arr) {
  const ar =  arr instanceof Array ? arr : [];  
  return ar.map((obj) => obj.id );
}
