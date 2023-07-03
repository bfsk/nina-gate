const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const Gpio = require('onoff').Gpio;

let relej = new Gpio(4, 'out');
relej.writeSync(1);

const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

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
    relej.writeSync(0);
        setTimeout(()=>{relej.writeSync(1);}, 2000);

    res.json("Gate is opening");
});

app.get('/gate/open/self-close', async (req, res) => {
    relej.writeSync(0);
        setTimeout(()=>{relej.writeSync(1);}, 2000);

    res.sendFile('HTML/test-self-close.html', {root: __dirname });
});
/*
app.get('/gate/open-test', async (req, res) => {
    counter++;
    console.log("EVO: " + counter)
    res.json("gate is opening: " + counter);
});*/
app.listen(port, '0.0.0.0', () => console.log(`Hello world app listening on port ${port}!`));