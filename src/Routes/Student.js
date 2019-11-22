const passport = require('passport');
const {
          addStudent,
          getStudent,
          getAllStudents,
          updateStudent,
          deleteStudent
} = require('../Controllers/Student');
module.exports = app => {
          app.get('/', getAllStudents);
          app.get('/:id', getStudent);
          app.post('/', addStudent);
          app.put('/:id', updateStudent);
          app.delete('/:id', deleteStudent);
          app.get(
                    '/auth/google',
                    passport.authenticate('google', {
                              scope: ['profile', 'email']
                    })
          );
          app.get('/auth/google/callback', passport.authenticate('google'));
};
