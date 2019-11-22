const Student = require('../Models/Students');
const { generateToken } = require('../utils/jwt');
async function addStudent(req, res) {
          const { firstName, lastName, email } = req.body;
          const student = new Student({
                    firstName: 'a',
                    lastName: 'b',
                    email: 'jq@gmail.com'
          });
          try {
                    await student.save();
          } catch (e) {
                    return res.json(e);
          }
          return res.json(student);
}
async function getStudent(req, res) {
          const { id } = req.params;
          const student = await Student.findId(id);
          if (!student) {
                    return res.status(404).json('Student not found');
          }
          return res.json(student);
}
async function getAllStudents(req, res) {
          students = await Student.find();
          res.json('hello from all Students');
}
async function updateStudent(req, res) {
          const { firstname, lastname, email } = req.body;
          const { id } = req.params;
          const newStudent = await Student.findByIdAndUpdate(
                    id,
                    { firstName, lastName, email },
                    { new: true }
          );
          if (!newStudent) {
                    return res.status(404).json('Student not found');
          }
          return res.json(newStudent);
}
function deleteStudent(req, res) {}
module.exports = {
          addStudent,
          getStudent,
          getAllStudents,
          updateStudent,
          deleteStudent
};
