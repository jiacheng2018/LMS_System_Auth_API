const CourseModel = require('../Models/Course');
async function addCourse(req, res) {
          const { codem, name, description } = req.body;
          const course = new CourseModel({
                    codem,
                    name,
                    description
          });
          await course.save();
          return res.json(course);
}

async function getCourse(req, res) {
          const { id: codem } = req.params;
          const course = await CourseModel.findById(codem);
          if (!course) {
                    return res.status(404);
          }
          return res.json(course);
}

async function getAllCourses(req, res) {
          const course = await CourseModel.find();
          return res.json(course);
          //   console.log(res.json(course));
}

async function updateCourse(req, res) {
          const { id } = req.params;
          const { name, description } = req.body;
          const newCourse = await CourseModel.findByIdAndUpdate(
                    id,
                    { name, description },
                    {
                              new: true
                    }
          );
          if (!newCourse) {
                    return res.status(404).json('course not found');
          }
          return res.json(newCourse);
}

async function deleteCourse(req, res) {
          const { id: codem } = req.params;
          const course = await CourseModel.findByIdAndDelete(codem);
          if (!course) {
                    return res.status(404).json('course not  found');
          }
          return res.sendStatus(200);
}

module.exports = {
          addCourse,
          getAllCourses,
          getCourse,
          updateCourse,
          deleteCourse
};
