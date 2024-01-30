const countStudents = require('./2-read_file');

countStudents("database.csv");


countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
