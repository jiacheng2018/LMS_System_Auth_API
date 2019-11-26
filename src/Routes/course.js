const express = require('express');
const {
          addCourse,
          getAllCourses,
          getCourse,
          updateCourse,
          deleteCourse
} = require('../Controllers/Course');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getCourse);
router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
