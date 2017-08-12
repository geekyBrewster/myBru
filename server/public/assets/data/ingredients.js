var ingredients = {};

var recipeTypes = ['All-grain', 'Partial-grain', 'Extract', 'Brew in a Bag', 'Other'];

var beerStyles = ['Altbier', 'Amber / Red Ale', 'American Lager', 'American Pale Ale', 'American Pale Lager', 'Barleywine', 'Belgian / French Ale', 'Bière de Garde', 'Black Ale', 'Blonde Ale', 'Bock', 'Brown Ale',
'California Common / Steam Beer', 'Cream Ale', 'Czech Lager', 'Czech Pilsner', 'Doppelbock', 'Double IPA', 'Dubbel', 'Dunkelweizen', 'English Ale', 'English Pale Ale', 'Extra Special Bitter (ESB)',
'Fruit / Vegetable Beer', 'German Ale', 'German Lager', 'German Pilsner', 'Gose', 'Hefeweizen', 'Herbed / Spiced Beer', 'Irish Ale', 'Kölsch', 'Lambic / Fruit Beer', 'Light Lager',
'Maibock', 'Milk / Sweet Stout','Oatmeal Stout', 'Oktoberfest / Märzen', 'Old Ale', 'Pale Wheat Ale', 'Porter, American', 'Porter, English',
'Pumpkin Ale', 'Rauchbier / Smoked Beer', 'Russian Imperial Stout', 'Russian Ale', 'Rye Ale', 'Saison / Farmhouse Ale', 'Schwarzbier',
'Scotch Ale / Wee Heavy', 'Scottish Ale','Stout', 'Strong Ale', 'Tripel', 'Vienna Lager', 'Weissbier', 'Wild Ale', 'Witbier'];


var maltTypes = ['Base malt', 'Specialty malt', 'Caramel malt', 'Roasted malt', 'Malt Extract', 'Other malt'];

var maltsDB = [
'2 row', 'Biscuit Malt', 'Black Patent', 'CaraPils', 'Chocolate Malt', 'Crystal 10L', 'Crystal 40L',
'Crystal 60L', 'Crystal 80L', 'Crystal 120L', 'Crystal 150L', 'Flaked Oats',
'Munich', 'Pale Ale', 'Pilsner', 'Rye', 'Unmalted Roasted Barley', 'Vienna', 'Wheat'
];

var hopsDB = [
'Amarillo', 'Cascade', 'Centennial', 'Chinook', 'Citra', ' Crystal', 'CTZ', 'Fuggle',
'Golding', 'Kenneth Golding', 'Lambic', 'Magnum', 'Mosaic', 'Mt. Hood', 'Northern Brewer', 'Nugget', 'Perle',
'Saaz', 'Simcoe', 'Tardif de Bourgogne', 'Willamette', 'Hop Extract'
];

var hopUse = ['Boil', 'Whirlpool', 'Dry hop', 'Other'];
var hopForm = ['Pellet', 'Leaf', 'Extract', 'Other'];

var yeastTypes = ['ale', 'wheat', 'lager'];
var yeastForm = ['liquid', 'dry', 'both'];
var yeastSupplier = ['Danstar', 'Muntons', 'Omega', 'Safale', 'White Labs', 'Wyeast', 'Other'];

var yeastsDB = [
'Wyeast 3787 Trappist High Gravity', 'Wyeast 1968 London ESB', 'Danstar Munich Wheat Beer', 'Muntons Ale Dry Yeast',
'Omega West Coast Ale I', 'Wyeast 1272 American Ale II', 'Saflager S-23 Lager Dry Yeast', 'Safale K-97',
'Danstar Windsor Ale Dry Yeast', 'White Labs WLP001 Califonia Ale', 'Danstar Belle Saison', 'Safbrew WB-06 Ale',
'Danstar Nottingham Ale', 'Omega Yeast German Bock', 'Omega Yeast American Pilsner', 'Omega Yeast Swiss Lager'
];

var otherIngredientsDB = [
'Lactose', 'Amber Malt Extract Syrup', 'White Labs Clarity Ferm', 'Irish Moss', 'Wheat Malt Extract Syrup',
'Muntons DME Light', 'Whirlfloc Tablets', 'Vanilla Beans', 'Honey', 'Coffee Beans', 'Fizz Drops'
];

ingredients.maltTypes = maltTypes;
ingredients.maltNames = maltsDB;
ingredients.hopTypes = hopsDB;
ingredients.hopUse = hopUse;
ingredients.hopForm = hopForm;
ingredients.yeastTypes = yeastTypes;
ingredients.yeastForms = yeastForm;
ingredients.yeastSuppliers = yeastSupplier;
ingredients.yeastsNames = yeastsDB;
ingredients.otherIngredientNames = otherIngredientsDB;

ingredients.recipeTypes = recipeTypes;
ingredients.beerStyles = beerStyles;
