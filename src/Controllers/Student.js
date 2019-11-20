const Student = require('../Models/Students');
async function addStudent(req, res) {
          const student = new Student({
                    firstName: 'a',
                    lastName: 'b',
                    email: 'jq@gmail.com'
          });
          await student.save();
          return res.json(student);
}
function getStudent(req, res) {}
function getAllStudents(req, res) {
          res.json('hello from all Students');
}
function updateStudent(req, res) {}
function deleteStudent(req, res) {}
module.exports = {
          addStudent,
          getStudent,
          getAllStudents,
          updateStudent,
          deleteStudent
};
