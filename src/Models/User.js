const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const Loginschema = new mongoose.Schema({
          username: {
                    type: String,
                    required: true
          },
          passpord: {
                    type: String,
                    require: true
          },
          email: {
                    type: String,
                    required: true,
                    validate: {
                              validator: email =>
                                        !Joi.string()
                                                  .email()
                                                  .validate(email).error,
                              msg: 'invalid Email format'
                    }
          }
});
Loginschema.methods.hashPassword = async function() {
          this.passpord = await bcrypt.hash(this.passpord, 10);
};
Loginschema.methods.validatePassword = async function(passpord) {
          const validpassword = await bcrypt.compare(password, this.password);
          return validpassword;
};
const Loginschema = mongoose.model('User', Loginschema);
module.exports = Loginschema;
