const mongoose = require('mongoose');
const CourseModel = new mongoose.Schema(
          {
                    _id: {
                              type: String,
                              uppercase: true,
                              alias: 'codem'
                    },
                    name: {
                              type: String,
                              require: true
                    },
                    description: {
                              type: String,
                              default: ''
                    },
                    __v: {
                              type: Number,
                              select: false
                    }
          },
          {
                    timestamps: true,
                    toJSON: {
                              virtuals: true
                    },
                    id: false
          }
);
const model = mongoose.model('Course', CourseModel);
module.exports = model;
