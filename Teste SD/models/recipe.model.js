var mongoose = require('../database/connection');
const ObjectId = mongoose.Schema.Types.ObjectId

var recipeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  type: {
    type: Number
  },
  description: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ingridients: [{
    id: {
        type: ObjectId,
    },
    quantity: {
        type: Number
    }

  }],
  active: {
      type: Boolean
  }
  
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;