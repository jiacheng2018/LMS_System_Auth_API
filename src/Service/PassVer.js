const keys = require('../Config/Prod');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('Student'); //load up user database schema
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Using google Strategy
passport.use(
          new GoogleStrategy(
                    {
                              clientID: keys.googleClientID, //global variable
                              clientSecret: keys.googleClientSecret,
                              callbackURL: '/auth/google/callback'
                    },
                    (accesstoken, refreshToken, profile, done) => {
                              new User({ gooleId: profile.id }).save();
                    }
          )
); //register service
