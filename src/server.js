require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./Route');
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const { connectToDB } = require('./utils/db');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const morganLang =
          process.env.NODE_ENV === 'production'
                    ? morgan('common')
                    : morgan('dev');
const app = express();
// passport.use(new GoogleStrategy());
app.use(helmet());
app.use(morganLang);
app.use(cors());
app.use(express.json());
app.use('/api', routes);
connectToDB()
          .then(() => {
                    app.listen(PORT, () => {
                              console.log(`server listen on ${PORT}`);
                    });
          })
          .catch(e => {
                    console.log(e);
                    process.exit(1);
          });
