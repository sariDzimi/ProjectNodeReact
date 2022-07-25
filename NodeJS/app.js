const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {

    res.send("all user")
})


app.listen(port, () => {
    console.log(`example app on port ${port}`);
})


