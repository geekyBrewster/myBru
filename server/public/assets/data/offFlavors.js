//DATA PULLED FROM NORTHERN BREWER & DRAFT MAGAZINE
// https://www.northernbrewer.com/connect/2011/08/common-off-flavors/
// http://draftmag.com/13-beer-off-flavors/

var offFlavorsDB = [
  { offFlavorName: 'Acetaldehyde',
    offFlavorDescription:
    'Green apples, Cidery/acetic, fresh cut grass, cucumbers – Appropriate for Light American lagers',
    causedBy: ['Premature removal from Yeast', 'Oxidation', 'Acetobacter']
  },
  { offFlavorName: 'Alcoholic',
    offFlavorDescription:
    'Hot, Spicy, Vinous, Prickly Mouthfeel – Appropriate for Strong Ales & Lagers',
    causedBy: ['High amount of fermentables', 'High fermentation temperature', 'Low O2 disolved in wort', 'Under pitching']
  },
  { offFlavorName: 'Astringency',
    offFlavorDescription:
    'Mouth puckering is present in flavor and mouthfeel, or a sensation of dryness on the tongue – Not appropriate for any style',
    causedBy: ['Poor sanitation', 'excessive hopping', 'excessive wort attenuation', 'boiling grains', 'excessive grain crushing', 'high sparge temps', 'excessively high pH']
  },
  { offFlavorName: 'Autolysed Yeast',
    offFlavorDescription:
    'Meat, sulfur, vegemite, barbecue potato chips – Not appropriate for any style',
    causedBy: ['Dead yeast', 'Very old bottles or cans']
  },
  { offFlavorName: 'Bitterness',
    offFlavorDescription:
    'Mouth puckering is present in aroma, flavor, and mouthfeel – Appropriate for American IPA & American Pale Ale',
    causedBy: ['High Alpha acid hops', 'Long boil times']
  },
  { offFlavorName: 'Bromophenol',
    offFlavorDescription:
    'Ink, an old tv, an electric fire – Not appropriate for any style',
    causedBy: ['Contamination of brewing ingredients by packaging material', 'Malts or hops packaged in recycled paper or cardboard']
  },
  { offFlavorName: 'Buttery',
    offFlavorDescription:
    'Butterscotch, butter, buttermilk, Diacetyl, Slick, present in aroma, flavor, and mouthfeel – Appropriate for Scotch ales, English ales and Czech Pils',
    causedBy: ['Premature racking', 'Low fermentation temperatures', 'Lactic aid bacteria', 'Mutant yeast']
  },
  { offFlavorName: 'Cardboard / Oxidation',
    offFlavorDescription:
    'Papery, Stale, Wet Cardboard – Not appropriate for any style',
    causedBy: ['Aeration of hot wort', 'Exposure of higher alcohols to oxygen', 'excessive aging']
  },
  { offFlavorName: 'Cloudiness',
    offFlavorDescription:
    'Cloudy, Hazy – Appropriate for German Weizen, Belgian Witbier, Lambic',
    causedBy: ['Chill haze – insufficient conversion of mash, little or no hot break in boil or cold break in chill', 'Permanent Haze – High sparge temps', 'Permanent Haze – High sparge temps', 'Powdery or low flocculating yeast']
  },
  { offFlavorName: 'Cooked Corn',
    offFlavorDescription:
    'Dimethyl Sulfide (DMS), Vegetal, overcooked broccoli, dirty vegetable oil – Appropriate for American lagers & Cream Ales',
    causedBy: ['Wort Bacteria – poor sanitation', 'not boiling wort for at least an hour', 'Covered boil', 'Under pitching yeast', 'poor yeast health', 'over sparging with water below 160F', 'use of adjuncts']
  },
  { offFlavorName: 'Fruitiness',
    offFlavorDescription:
    'Strawberries, Plums, Bananas, Peaches, Present in flavor and aroma – Appropriate for Most Ales',
    causedBy: ['By-product of fermentation', 'Higher fermentation temperatures increase ester production', 'Warm fermentation with lager yeast', 'Yeast selection']
  },
  { offFlavorName: 'Light Body',
    offFlavorDescription:
    'Watery, Weak, and Thin Mouthfeel – Appropriate for Light American Lagers & Lambics',
    causedBy: ['Low dextrins', 'Poor quality malt', 'Large percentage of adjunct sugars', 'Low mash temperature', 'Protein rest too long']
  },
  { offFlavorName: 'Low Head Retention',
    offFlavorDescription:
    'Flat, Watery',
    causedBy: ['Insufficient Proteins in beer create high surface tension', 'Dirty/oily glass', 'Soap residue on glass', 'Low protein grist']
  },
  { offFlavorName: 'Metallic',
    offFlavorDescription:
    'Iron, blood, pennies, 9-volt batteries – Not appropriate for any style',
    causedBy: ['Metal ions in brewing water', 'Leaching from kegs, keg couplers, or draft faucets']
  },
  { offFlavorName: 'Phenolic',
    offFlavorDescription:
    'Band-aid, Medicinal, Clove like, Plastic, Vinyl, Iodine – Appropriate for Belgian Styles, German Wheat Beers',
    causedBy: ['Wild yeast', 'Improper sanitation', 'Chlorinated tap water', 'Certain yeast strains produce naturally', 'Over sparging', 'Using a cleanser or sanitizer that\'s chlorine or iodine based']
  },
  { offFlavorName: 'Sherry-Like',
    offFlavorDescription:
    'Sherry, Vinous, Wine-like, Papery, Stale – Appropriate for Barley wines & Old Ales',
    causedBy: ['A product of oxidation', 'Aging', 'More prevalent it high alcohol beers']
  },
  { offFlavorName: 'Solvent-like',
    offFlavorDescription:
    'Paint thinner, nail polish remover (acetone), harsh aromas - Not Appropriate for any style',
    causedBy: ['A product of oxidation', 'High fermentation tempeatures', 'Using non-food grade plastic']
  },
  { offFlavorName: 'Skunky / Lightstruck',
    offFlavorDescription:
    'Skunk, really bad week – Not appropriate for any style',
    causedBy: ['Exposure to sunlight', 'Ultraviolet light', 'Using clear or green bottles']
  },
  { offFlavorName: 'Sourness',
    offFlavorDescription:
    'Tart and Sour – Appropriate for Lambics, Flanders Ales, Berlinner Weiss',
    causedBy: ['Lactic Acid from lactic acid bacteria', 'Acetic Acid from Acetobacter', 'Pediococcus', 'Lactobacillus', 'Poor sanitation', 'High fermentaton temps', 'Excessive acid rest', 'Mashing too long', 'Storage at warm temps', "Poor yeast strain"]
  }
];
