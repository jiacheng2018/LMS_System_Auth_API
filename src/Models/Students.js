const mongoose = require('mongoose');
const scheme = new mongoose.Scheme({
          _id: {
                    type: String,
                    uppercase: true
          },
          name: {
                    type: String,
                    required: true
          },
          description: {
                    type: String,
                    default: ''
          }
});
const model = mongoose.model('Student', scheme);
