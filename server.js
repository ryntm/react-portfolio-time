const express = require("express");
const path = require("path");

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get('/portfolio', (req, res) => {
//   res.sendFile((path.join(__dirname, "client/build")))
// });
// app.get('/contact', (req, res) => {
//   res.sendFile((path.join(__dirname, "client/build")))
// });

// if(process.env.NODE_ENV == 'production'){ 
  // app.use(express.static(path.join(__dirname,'client/build')))};


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
