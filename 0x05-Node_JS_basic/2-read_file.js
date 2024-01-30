const fs = require('fs');
module.exports = function countStudents(_path) {
  if (!fs.existsSync(_path)) {
    throw Error('Cannot load the database');
  }
  let content = fs.readFileSync(_path, 'utf-8');
  content = content.split('\n');
  let student = [];
  let [cs_name, cs_count] = ['', 0];
  let [swe_name, swe_count] = ['', 0];
  content.forEach((line) => {
     student = line.split(',');
     if (student.includes('CS')) {
     	const cs_student = student.filter(e => e !== 'CS' && isNaN(e));
     	cs_count += cs_student.length;
	cs_name += cs_student.join(', ') + ' ';
     } else if (student.includes("SWE")){
     	const swe_student = student.filter(e => e !== 'SWE' && isNaN(e));
	swe_count += swe_student.length;
	swe_name += swe_student.join(', ') + ' ';
    }
  });
  console.log(`Number of students: ${cs_count + swe_count}`);
  console.log(`Number of students in CS: ${cs_count}. List: ${cs_name}`);
  console.log(`Number of students in SWE: ${swe_count}. List: ${swe_name}`)
}
