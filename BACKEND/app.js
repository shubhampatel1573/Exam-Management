const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Question = require("./models/question");
const Test = require("./models/test");

main();

async function main() {
  await  mongoose.connect("mongodb://127.0.0.1:27017/examManagement")
  console.log("DATA BASE CONNECTED");
}


app.get("/", async (req, res)=>{

 const questionData =  await Question.insertOne({
        question: "what is your name?",
        options: [
            "shubham",
            "shivam",
            "khushi"
        ]
    })

    const testData =  await Test.insertOne({expireTime:"9:30am", startTime:"8:00am"})
    testData.Questions.push(questionData);

    await testData.save();

    res.json({success: true, data: questionData});
})

app.listen(8080, ()=>{
    console.log("APP IS LISTENING");
})