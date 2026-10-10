const express = require("express");
const app = express();

const port = 3000;
const name = "Camper Bot";
const hobbies = ['cycling', 'boating', 'guitar'];
const skills = ['JavaScript', 'Node.js', 'Express.js'];

app.get("/", (req, res) => {
    res.send("Welcome to Camper Bot's homepage!");
})

app.get("/hobbies", (req, res) => {
    res.send("I cycle, go boating, and play guitar.");
})

app.get("/skills", (req, res) => {
    res.send("JavaScript, Node.js, and Express.js!");
})

app.get("/api/profile", (req, res) => {
    res.json({
        "name": name,
        "hobbies": hobbies,
        "skills": skills
    });
})


app.listen(port, () => {
    console.log(`${port}`);
})