// This is server
//  client ID 214420770396-tsk489qn2kc6nteuskp6eksgh3dgpc23.apps.googleusercontent.com
//  client secret xvpvbz9MXXyQ6bzvtNQj1zXO
require('dotenv').config();
const express = require('express');
const authRoutes = require('./Routes/Student');
const mongoose = require('mongoose');
require('./Models/Course');
require('./Service/PassVer');
mongoose.connect(
          'mongodb+srv://jiacheng:85214997@cluster0-bbisj.mongodb.net/test?retryWrites=true&w=majority'
);
const app = express();
authRoutes(app);
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const morganLog =
          process.env.NODE_ENV === 'production'
                    ? morgan('common')
                    : morgan('dev');
app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
          console.log(`Server on port ${PORT}`);
});
