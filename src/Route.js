const express = require('express');
const studentRoute = require('./Routes/student');
const router = express.Router();
router.use('/students', studentRoute);
module.exports = router;
