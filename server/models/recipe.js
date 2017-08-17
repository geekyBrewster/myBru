var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var HopSchema = new Schema ({
  hopType: String,
  hopName: String,
  hopAmt: Number,
  hopForm: String,
  hopUse: String,
  hopTimeBrew: Number,
  hopTimeDry: Number,
  hopAdded: {type: Boolean, default: false}
});

var MaltSchema = new Schema ({
  maltName: {type: String, required: true},
  maltType: {type: String, default: 'base'},
  maltAmtLbs: Number,
  maltAmtOz: Number,
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

var beerStyleSchema = new Schema ({
  beerCategory: String,
  styleName: String
});

var FinalProductSchema = new Schema ({
  //FROM BOTTLE.HTML
    //bottleDate: {type: Date, default: Date.now},
  //FROM DRINK.HTML
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
    //batchImage: String,
    offFlavors: [OffFlavorSchema],
    suspectedCauses: String
});

//FOR EACH RECIPE YOU CAN HAVE MULTIPLE BATCHES
var BatchSchema = new Schema ({
  //BATCH TRACKING INFO
  //BatchID will be tied to Recipe.batchesBrewed
  batchID: Number,
  //FROM BREW.HTML
    brewDate: {type: Date, default: Date.now, required: true},
    brewNotes: String,
    mashNotes: String
});

var RecipeSchema = new Schema({
  //FROM RECIPE.HTML
    username: {type: String, required: true},
    recipeName: {type: String, required: true},
    beerStyle: [beerStyleSchema],
    recipeType: String,
    recipeDescription: String,
    procedure: String,
    batchSize: {type: Number, default: 5},
    boilLength: Number,
    mashLength: Number,
    mashTemp: Number,
    originalGravity: Number,
    finalGravity: Number,
    recipeNotes: String,
    recipeSrc: String,
    batchesBrewed: {type: Number, default: 0, required: true},
    batchStatus: {type: String, default: 'Ready to Brew', required: true},

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

var models = {
  Recipe: mongoose.model('Recipe', RecipeSchema),
  Batch: mongoose.model('Batch', BatchSchema),
  FinalBrew: mongoose.model('FinalBrew', FinalProductSchema)
};

module.exports = models;
// Will need to require this in the routes: recipe.router.js, brew.router.js, drink.router.js
