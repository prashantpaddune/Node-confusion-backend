const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');


app.use(bodyParser.json());

app.use('/dishes', dishRouter);


app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});