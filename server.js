const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

// Handlebars-form-helpers experiment
// var exphbs = require('express-handlebars'),
//     handlebars = require('handlebars'),
//     helpers = require('handlebars-form-helpers').register(handlebars);
// var hbs = exphbs.create({
//     helpers: helpers,
//     defaultLayout: 'main'
// });
// app.engine('.hbs', hbs.engine);
// app.set('view engine', '.hbs');

// Require Routes
const routes = require('./routes.js');

// Create an instance of the express app.
const app = express();

// Set the port of our application
var PORT = process.env.PORT || 1337;

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// body-parser middleware for req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give server access to routes
app.use('/', routes);

// Start server
app.listen(PORT, (stuff) => console.log("Server listening on: http://localhost:" + PORT));