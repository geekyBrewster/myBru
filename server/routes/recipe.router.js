var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var Models = require('../models/recipe.js');
var Recipe = Models.Recipe;


//POST -- RECEIVE RECIPE OBJECT AND ADD TO DB
router.post('/', function(req, res){
  console.log('Inside POST /recipe');
  //check to see if user is logged in
  if(req.isAuthenticated()){
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
  } else {
    res.sendStatus(403);
  }
}); //end of POST

//GET -- SEND ALL RECIPES TO CLIENT
router.get('/all', function(req, res) {
  console.log('in recipe GET');
  //check to see if user is logged in
  if(req.isAuthenticated()){

    // find (select) all recipes for that username
    Recipe.find({'username' : req.user.username}, function(err, data) {
      console.log('start GET');
      if(err) {
        console.log('find error:', err);
        res.sendStatus(500);
      } else {
        res.send(data);
        console.log('success');
      }
    });
  } else {
    res.sendStatus(403);
  }
}); //end of GET all recipes

//GET - SEND SELECTED RECIPE TO CLIENT
router.get('/one/:id', function(req, res) {
  console.log('in recipe GET to find single recipe');
  //check to see if user is logged in
  if(req.isAuthenticated()){
    // find (select) recipe in the collection
    var recipeId = req.params.id;
    console.log('ID to search with: ', recipeId);

    Recipe.findOne({_id: recipeId}, function(err, data){
      if(err){
        console.log('Search error: ', err);
        res.sendStatus(500);
      } else {
        res.send(data);
        console.log('success in finding one recipe');
      }
    });
  } else {
    res.sendStatus(403);
  }
});//end of GET selected recipe

//DELETE -- DELETE EXISTING RECIPE
router.delete('/:id', function(req, res) {
  console.log('in recipe DELETE to delete id: ', req.params.id);
  //check to see if user is logged in
  if(req.isAuthenticated()){
    // delete selected recipe in our collection
    Recipe.findByIdAndRemove(req.params.id, function(err, data){
      if(err){
        console.log('Deletion error: ', err);
        res.sendStatus(500);
      } else {
        res.send(data);
        console.log('success in deleting recipe');
      }
    });
  } else {
    res.sendStatus(403);
  }
}); //end of DELETE




//UPDATE -- UPDATE EXISTING RECIPE









module.exports = router;
