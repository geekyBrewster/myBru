var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var RecipeSchema = new Schema({
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true}
});















module.exports = mongoose.model('Recipe', RecipeSchema);
// Will need to require this in the routes: recipe.router.js, brew.router.js, drink.router.js
