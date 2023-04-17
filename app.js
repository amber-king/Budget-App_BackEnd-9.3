// will create & configure my express app

const express = require("express");
const cors = require("cors")

const transactionController = require("./controller/bugetController")

const app = express();
app.use(express.json()) 
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to the Budget App💰! For Docs, please visit ... ")
})

app.use("/transactions", transactionController)

module.exports = app
