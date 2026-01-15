const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question:String,
    options: [
        {
            type: String
        }
    ]
});

module.exports = mongoose.model("Question", questionSchema);