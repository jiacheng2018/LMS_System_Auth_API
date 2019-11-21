// This is server
//  client ID 214420770396-tsk489qn2kc6nteuskp6eksgh3dgpc23.apps.googleusercontent.com
//  client secret xvpvbz9MXXyQ6bzvtNQj1zXO
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Using google Strategy
const keys = require('./Config/Prod');
const app = express();
passport.use(
          new GoogleStrategy(
                    {
                              clientID: process.env.googleClientID, //global variable
                              clientSecret: process.env.googleClientSecret,
                              callbackURL: '/auth/google/callback'
                    },
                    accesstoken => {
                              console.log(accesstoken);
                    }
          )
); //register service
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const morganLog =
          process.env.NODE_ENV === 'production'
                    ? morgan('common')
                    : morgan('dev');
app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(
          '/auth/google',
          passport.authenticate('google', {
                    scope: ['profile', 'email'] //user profile
          })
);
app.get('/', (req, res) => {
          res.json('hello');
});
app.listen(PORT, () => {
          console.log(`Server on port ${PORT}`);
});
