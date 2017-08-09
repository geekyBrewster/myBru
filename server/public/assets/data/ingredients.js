var ingredients = {};

var maltsDB = [
'2 row', 'Biscuit Malt', 'Black Patent', 'CaraPils', 'Chocolate Malt', 'Crystal 10L', 'Crystal 40L',
'Crystal 60L', 'Crystal 80L', 'Crystal 120L', 'Crystal 150L', 'Flaked Oats',
'Munich', 'Pale Ale', 'Pilsner', 'Rye', 'Unmalted Roasted Barley', 'Vienna', 'Wheat'
];

var hopsDB = [
'Amarillo', 'Cascade', 'Centennial', 'Chinook', 'Citra', ' Crystal', 'CTZ', 'Fuggle',
'Golding', 'Kenneth Golding', 'Lambic', 'Magnum', 'Mosaic', 'Mt. Hood', 'Northern Brewer', 'Nugget', 'Perle',
'Saaz', 'Simcoe', 'Tardif de Bourgogne', 'Willamette'
];

var yeastTypes = ['ale', 'wheat', 'lager'];
var yeastForm = ['liquid', 'dry', 'both'];
var yeastSupplier = ['Danstar', 'Muntons', 'Omega', 'Safale', 'White Labs', 'Wyeast'];

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

ingredients.malts = maltsDB;
ingredients.hops = hopsDB;
ingredients.yeasts = yeastsDB;
ingredients.otherIngredients = otherIngredientsDB;
