# myBrü, homebrew tracking app

myBrü is a full-stack web application where homebrewers can track the details of the brewing process from recipe preparation through the actual brewing of the beer and finally to the tasting and evaluation of the final product. The brewer will be prompted to create an account where they’ll store their recipes, brewing notes, and final project notes.

## Built With

- MEAN Stack: MongoDB, Express, AngularJS, Node.js
- Angular Material for styling
- Angular-xeditable for in-line editing
- Passport for user authentication
- BreweryDB API for ingredient and beer style info
- Google Font and Font Awesome for text and icon styling
- Heroku and mLabs for web deployment
- Trello for project management

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [AngularJS](https://angularjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](http://mongoosejs.com/index.html)
- [Express](http://expressjs.com/)
- [Angular Material](https://material.angularjs.org/latest/)
- [Angular-xeditable](https://vitalets.github.io/angular-xeditable/)


### Installing

In a terminal window, navigate to the project folder once saved on your computer.
- Run `npm install`
- Make sure mongo is running in an open terminal window
- `npm start`

## Screen Shot

![Main Menu](https://github.com/geekyBrewster/myBru/blob/master/server/public/assets/img/mainMenu.jpg?raw=true)

## Documentation
Link to a read-only version of the scope for this project:
[myBrü scope](https://docs.google.com/document/d/13it_NFDXFKLkB8nwPpTXvBecL3lib6bdZx1J1Cq0Vz0/pub)

### Completed Features

High level list of items completed.

- [x] User can create an account or log into an existing account
- [x] From the main menu, the user can create a new recipe, which is stored under their account in the database
- [x] Users can delete recipes from the main menu
- [x] When entering recipe details, users can edit individual ingredients in-line from the table they're displayed in
- [x] User can select a recipe to brew, which displays recipe details on a new page w/ inputs for brew day details (date, notes, etc.)
- [x] User can select a batch in progress and evaluate the final product using criteria similar to BJCP judging

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Recipe summary page w/ in-line editing via Angular-xeditable
- [ ] Add pages to track fermentation, bottling, lagering, and aging.
- [ ] Add calendar to track important dates: end of primary and secondary fermentation, end of bottle conditioning, etc.
- [ ] Calendar will send reminders about upcoming important dates

## Deployment

This application requires an access key for the BreweryDB API, which can be requested from the site. Once requested, save the key API key in a `config.js` file inside the server folder and add config.js to your .gitignore file.


## Authors

* Amanda Kirchner


## Acknowledgments

* Chris Black, Kris Szafranski
