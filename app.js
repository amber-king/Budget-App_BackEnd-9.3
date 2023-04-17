// will create & configure my express app

// DEPENDENCIES
const express = require("express");
const cors = require("cors")
const app = express();

const transactionController = require("./controller/bugetController")

// ROUTES
app.use(express.json()) 
app.use(cors())
app.use("/transactions", transactionController)


app.get("/",(req,res)=>{
    res.send("Welcome to the Budget App💰! For Docs, please visit ... ")
})


// EXPORT
module.exports = app
