const express = require('express');
const studentRoute = require('./Routes/Student');
const router = express.Router();
router.use('/students', studentRoute);
module.exports = router;
