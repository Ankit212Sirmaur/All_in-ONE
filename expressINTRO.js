const express = require('express');

const app = express();

const PORT = 1100;

app.get('/home', (request, response) =>{
    response.send('welcome to home');
    response.json({
        success: 'true',
        msg: 'ok'
    });
});

app.listen(PORT, ()=>{
    console.log(`successfully started the express server at ${PORT}`);
})