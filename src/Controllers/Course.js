const Course = require('../Models/Course');
async function addCourse(req, res) {
          const course = new Course({
                    _id: 'ABC123',
                    name: 'Intro of web',
                    description: 'intro'
          });
          await course.save();
          return res.json(course);
}
