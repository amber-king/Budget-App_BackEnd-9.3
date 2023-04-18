// use env var to start my servver & other services

// DEPENDENCIES
const app = require("./app");

// CONFIGURATION
require("dotenv").config();
const port = process.env.PORT;

// LISTEN
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
