const express = require('express');
const router = express.Router();

router.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req,res,next) => {
        res.send('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.send('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.send('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.send('Deleting all dishes');
    })

router.route('/:dishId')
    .get((req, res, next) => {
        res.send('Will send '+ req.params.dishId + ' to you!');
        next()
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.send('POST operation not supported on /dishes/'+ req.params.dishId);
        next()
    })
    .put((req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.send('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);

    })
    .delete((req, res, next) => {
        res.send('Deleting dish: ' + req.params.dishId);
    })

module.exports = router;