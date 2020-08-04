const express = require('express');
const router = express.Router();

router.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.send('Will send all the Promo to you!');
    })
    .post((req, res, next) => {
        res.send('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.send('PUT operation not supported on /promo');
    })
    .delete((req, res, next) => {
        res.send('Deleting all promo');
    })

router.route('/:promoId')
    .get((req, res, next) => {
        res.send('Will send '+ req.params.promoId + ' to you!');
        next()
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.send('POST operation not supported on /promo/'+ req.params.promoId);
        next()
    })
    .put((req, res, next) => {
        res.write('Updating the promo: ' + req.params.promoId + '\n');
        res.send('Will update the promo: ' + req.body.name + ' with details: ' + req.body.description);

    })
    .delete((req, res, next) => {
        res.send('Deleting promo: ' + req.params.promoId);
    })

module.exports = router;