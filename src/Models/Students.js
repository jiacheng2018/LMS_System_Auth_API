const mongoose = require('mongoose');
const { Schema } = mongoose;
const ItemSchema = new Schema({
          gooleId: String
});
mongoose.model('Student', ItemSchema);
