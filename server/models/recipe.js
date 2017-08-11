var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var HopSchema = new Schema ({
  hopType: {type: String, required: true},
  hopAmt: Number,
  hopTime: Number,
  hopAdded: {type: Boolean, default: false}
});

var MaltSchema = new Schema ({
  maltName: {type: String, required: true},
  maltType: {type: String, default: 'base'},
  maltAmt: Number,
  maltAdded: {type: Boolean, default: false}
});

var YeastSchema = new Schema ({
  yeastSupplier: String,
  yeastType: {type: String, required: true},
  rehydrate: {type: Boolean, default: false},
  yeastAdded: {type: Boolean, default: false}
});

var IngredientSchema = new Schema ({
  ingredientType: String,
  ingredientAmt: String,
  ingredientNotes: String,
  ingredientAdded: {type: Boolean, default: false}
});

var OffFlavorSchema = new Schema ({
  offFlavorName: String,
  offFlavorDescription: String,
  causedBy: Array
});

var FinalProductSchema = new Schema ({
  //FROM FERMENTATION NOTES
    primaryFermentLength: Number,
    secondFermentLength: Number,
  //FROM BOTTLE.HTML
    bottleDate: {type: Date, default: Date.now},
  //FROM DRINK.HTML
    fromBatchID: Number,
    drinkDate: {type: Date, default: Date.now, required: true},
    batchRank: Number,
    worthRepeating: String,
    batchChanges: String,
    aroma: String,
    appearance: String,
    flavor: String,
    mouthfeel: String,
    batchImpressions: String,
    batchNote: String,
    batchImage: String,
    offFlavors: [OffFlavorSchema],
    suspectedCauses: String
});

//FOR EACH RECIPE YOU CAN HAVE MULTIPLE BATCHES
var BatchSchema = new Schema ({
  //BATCH TRACKING INFO
  //BatchID will be tied to Recipe.batchesBrewed
  batchID: Number,
  batchStatus:{type: String, default: 'Ready to Brew', required: true},
  //FROM BREW.HTML
    brewDate: {type: Date, default: Date.now, required: true},
    brewNotes: String,
    mashNotes: String
});

var RecipeSchema = new Schema({
  //FROM RECIPE.HTML
    username: {type: String, required: true},
    recipeName: {type: String, required: true},
    beerStyle: {type: String, required: true},
    recipeType: String,
    recipeDescription: String,
    procedure: String,
    batchSize: {type: Number, default: 5},
    boilLength: Number,
    mashLength: String,
    originalGravity: Number,
    finalGravity: Number,
    recipeNotes: String,
    recipeSrc: String,
    batchesBrewed: {type: Number, default: 0, required: true},

  //FROM RECIPE.HTML -- ARRAY OF OBJECTS
    hops: [HopSchema],
    malts: [MaltSchema],
    yeasts: [YeastSchema],
    otherIngredients: [IngredientSchema],

  //TRACK INDIVIDUAL BATCHES OF THIS RECIPE -- Initialize and update on "Save Brew Notes"
  batches: [BatchSchema],

  //TRACK INDIVIDUAL FINAL PRODUCTS FOR EACH BATCH -- Initialize and update on "Save Final Product Notes"
  finalBrew: [FinalProductSchema]
});




module.exports = mongoose.model('Recipe', RecipeSchema);
// Will need to require this in the routes: recipe.router.js, brew.router.js, drink.router.js
