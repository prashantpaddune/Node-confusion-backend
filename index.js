const express = require('express')
const app = express()
const port = 3000

// Routers
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

// Middlewares used
app.use(bodyParser.json());

// Routers used
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});