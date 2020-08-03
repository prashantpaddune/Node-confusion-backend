const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.send('<html><body><h1>This is an Express Server</h1></body></html>');

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});