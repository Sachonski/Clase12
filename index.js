const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
app.use(express.static("public"));

app.listen(process.env.PORT || 4000, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/home.html"));
});