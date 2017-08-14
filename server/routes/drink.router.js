var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var Models = require('../models/recipe.js');
var Batch = Models.Batch;
var Recipe = Models.Recipe;
var FinalProduct = Models.FinalBrew;

//PUT -- ADD FINAL PROJECT DATA TO RECIPE OBJECT IN DB
router.put('/:id', function(req, res){
  console.log('Inside PUT /drink');
  //check to see if user is logged in
  if(req.isAuthenticated()){

    //create new Final Product using data from client and batchSchema
    console.log('data from client PUT: ', req.body);
    var addFinalProduct = new FinalProduct(req.body.finalBrew);
    var updateStatus = req.body.batchStatus;
    var recipeID = req.params.id;

    //add batch data to the recipe object already in DB
    console.log('Final brew to add to DB: ', addFinalProduct);
    console.log('Recipe to add batch data to: ', recipeID);
    Recipe.findByIdAndUpdate(
      {_id: recipeID},
      {$set:
        {
          batchStatus: updateStatus,
          finalBrew: addFinalProduct
        }
      },
      function(err, data){
        if(err){
          console.log('Update error: ', err);
        } else {
          res.sendStatus(200);
        }
      }
    ); //end of find and update
  } else {
    res.sendStatus(403);
  }
}); //end of PUT



module.exports = router;
