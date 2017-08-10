var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var Recipe = require('../models/recipe.js');

//POST -- RECEIVE RECIPE OBJECT AND ADD TO DB
router.post('/', function(req, res){
  console.log('Inside POST /recipe');

  //create new Recipe using data from client
  console.log('data from client POST: ', req.body);
  var addRecipe = new Recipe(req.body);

  //save recipe to DB
  console.log('Recipe to add to DB: ', addRecipe);
  addRecipe.save(function(err, addRecipe){
    console.log('POST saved data: ', addRecipe);
    if(err) {
      console.log('POST save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

  //GET recipes

}); //end of POST

//GET -- SEND RECIPE OBJECT TO CLIENT
router.get('/', function(req, res) {
  console.log('in recipe GET');
  // find (select) all documents in our collection
  Recipe.find({}, function(err, data) {
    console.log('start GET');
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      console.log('success');
    }
  });
});


//DELETE -- DELETE EXISTING RECIPE





//UPDATE -- UPDATE EXISTING RECIPE









module.exports = router;
