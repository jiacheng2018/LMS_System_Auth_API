const express = require('express');
const studentRoute = require('./Routes/student');
const course = require('./Routes/course');
const router = express.Router();
router.use('/students', studentRoute);
router.use('/course', course);

module.exports = router;
