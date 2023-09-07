// will create & configure my express app

// DEPENDENCIES
const express = require("express");
const cors = require("cors")
const app = express();

const transactionController = require("./controller/budgetController")

// ROUTES
app.use(express.json()) 
app.use(cors())
app.use("/transactions", transactionController)

// app.use((req,res,next)=>{
//     console.log("It's a go on the code! 👍🏾")
// })



app.get("/",(req,res)=>{
    res.send("Welcome to the Budget App💰! For Docs, please visit ... ")
})

// app.get("*", (req, res) => {
//     res.status(404).json({"error" : "Page Not Found"})
// })
// EXPORT
module.exports = app
