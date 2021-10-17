const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const validator = require("validator");
const task = require("./models/task");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/TaskDB", { useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    const task = {
        taskType: "online",
        taskTitle: "Creating Application",
        taskDesc: "Online shopping application",
        suburb: "Geelong",
        date: "10/10/2021"
    }
    res.send(task)
})

app.post('/register', (req,res) => {
    const task = new task({
        taskType : req.body.taskType,
        taskTitle : req.body.taskTitle,
        taskDesc : req.body.taskDesc,
        suburb : req.body.suburbInput,
        date : req.body.dateInput,
        budgetType : req.body.budget,
        budgetAmount : req.body.budgetAmount
    });
    task.save()
    .catch((err)=> console.log(err));
    res.json(('save to db: ' +task));
    console.log(req.body)
})

let port = process.env.PORT;
if(port == null || port == "") {
    port = 8080; 
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfully on Port 8080!")
})