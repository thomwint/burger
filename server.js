// ------------
// Dependencies
// ------------
const express = require('express');
const exphbs = require('express-handlebars');

// ------------------
// Set-up Port for app
// ------------------
const PORT = process.env.PORT || 8080;

const app = express();

// ----------------------------------------
// Set-up express app to handle data parsing
// ----------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// -------------
// Import routes
// -------------
// const routes = require('./');

// app.use(routes);

// ----------------------------
// Listener for client requests
// ----------------------------
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
