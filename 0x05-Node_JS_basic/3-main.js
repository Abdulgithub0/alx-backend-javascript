const fs = require('fs');
module.exports = function countStudents(_path) {
  fs.readFile(_path, 'utf-8', (err, content) => {
  content = content.split('\n');
  let student = [];
  let [cs_name, cs_count] = ['', 0];
  let [swe_name, swe_count] = ['', 0];
  content.forEach((line) => {
		  student = line.split(',');
		  if (student.includes('CS')) {
		  	cs_count += 1;
     			cs_name += student[0] + ', '
     		} else if (student.includes("SWE")){
			swe_count += 1;
			swe_name += student[0] + ', ';
    		}
  	});
  	console.log(`Number of students: ${cs_count + swe_count}`);
  	console.log(`Number of students in CS: ${cs_count}. List: ${cs_name.slice(0, -2)}`);
  	console.log(`Number of students in SWE: ${swe_count}. List: ${swe_name.slice(0, -2)}`)});
}
