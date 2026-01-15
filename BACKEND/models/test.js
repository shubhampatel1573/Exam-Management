const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    createdAt: {
        type: String,
        default: Date.now()
    },
    expireTime: String,
    startTime: String,
    Questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question"
        }
    ]
})

module.exports = mongoose.model("Test", testSchema)