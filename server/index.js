const express = require('express');
const app = express();
app.use(express.json())

const database = require('./config/database')


database.connect();


app.listen(4000, () =>{
    console.log("APP connected");
})

app.get("/", (req, res) => {
    res.send(`<h1>Hello</h1>`)
})