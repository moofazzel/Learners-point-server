const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PROT || 5000;

app.use(cors());

const data = require("./data/data.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Learning Platform Learners Point Running");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((t) => t.id === id);
  res.send(selectedCourses);
});

app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((t) => t.id === id);
  res.send(selectedCourses);
});

// app.get("/category/:id", (req, res) => {
//   const id = req.params.id;
//   if (id === '7') {
//     res.send(courses);
//   } else {
//     const selectedData = courses.filter((t) => t.category_id === id);
//     res.send(selectedData);
//   }
// });

app.listen(port, () => {
  console.log("Learners Point Running on port", port);
});
