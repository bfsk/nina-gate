const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    console.log("doso request")
    res.json("ok");
});

app.get('/gate/health', async (req, res) => {
    console.log("HEALTH OK")
    res.json("HEALTH OK");
});

app.get('/gate/open', async (req, res) => {
    console.log("opening gate")
    res.json("gate is opening");
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));