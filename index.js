const express = require("express");
const app = express();
const port = process.env.PROT || 5000;
// const cors = require("cors");

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Learning Platform Learners Point Running");
});

app.listen(port, () => {
    console.log('Learners Point Running on port',port)
})