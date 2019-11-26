const mongoose = require('mongoose');
const Userscheme = new mongoose.Schema({
          firstName: {
                    type: String,
                    required: true
          },
          lastName: {
                    type: String,
                    required: true
          },
          email: {
                    type: String,
                    required: true
          }
});
const model = mongoose.model('Student', Userscheme);
module.exports = model;
