// use env var to start my servver & other services

require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3333;

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
