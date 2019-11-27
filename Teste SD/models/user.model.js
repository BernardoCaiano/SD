var mongoose = require('../database/connection');
//const bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
      type: String
  },
  password: {
    type: String
  },
  
});

/* userSchema.pre("save", async function(next) {
    const salt = 10;
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
     
    next();
}) */

const User = mongoose.model('User', userSchema);

module.exports = User;