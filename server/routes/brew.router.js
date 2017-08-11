var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var Models = require('../models/recipe.js');
var Batch = Models.Batch;
var Recipe = Models.Recipe;

//PUT -- ADD BATCH DATA TO RECIPE OBJECT IN DB
router.put('/:id', function(req, res){
  console.log('Inside PUT /brew');

  //create new Batch using data from client and batchSchema
  console.log('data from client PUT: ', req.body);
  var addBatch = new Batch(req.body.batch);
  var newBatchCount = req.body.batchesBrewed;
  var updateBatchStatus = req.body.batchStatus;
  var recipeID = req.params.id;

  //add batch data to the recipe object already in DB
  console.log('Batch to add to DB: ', addBatch);
  console.log('Recipe to add batch data to: ', recipeID);
  console.log('Update brew counter to: ', newBatchCount);
  Recipe.findByIdAndUpdate(
    {_id: recipeID},
    {$set:
      {
        batchesBrewed: newBatchCount,
        batchStatus: updateBatchStatus,
        batches: addBatch
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

}); //end of PUT


module.exports = router;
