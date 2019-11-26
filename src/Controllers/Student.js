const StudentModel = require('../Models/Student');
async function addStudent(req, res) {
          const studen = new StudentModel({
                    firstName: 'hello',
                    lastName: 'c',
                    email: '123@test.com'
          });
          await studen.save();
          return res.json(studen);
}

function getStudent(req, res) {}

async function getAllStudents(req, res) {
          const students = await StudentModel.find();
          return res.json(students);
}

function updateStudent(req, res) {}

function deleteStudent(req, res) {}

module.exports = {
          addStudent,
          getAllStudents,
          getStudent,
          updateStudent,
          deleteStudent
};
