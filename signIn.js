const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const port = 5500;

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1", (req, res) =>{
    const userName = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;

    res.json({
        success: true,
        name: userName, 
        email: email,
        pass: pass
    })
})

app.listen(port, ()=>{
    console.log(`started the server at ${port}`);
})