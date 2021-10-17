const mongoose = require("mongoose")

const  task_schema = new mongoose.Schema(
    {
        taskType: String,
        taskTitle: String,
        taskDesc: String,
        suburb: String,
        date: Date,
        budgetType: String,
        budgetAmount: String
    }
)

module.exports = mongoose.model("task", task_schema)