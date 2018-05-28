const express = require('express');
const router = express.Router();

const dogs = require('./app/dogs/dogs_controller.js');
const qBank = require('./app/questions/qbank.js');

// Example Layout - Get All Dogs from DB
router.get('/', (req, res) => {
    var breeds;
    dogs.selectAll((breedData) => {
        breeds = breedData;
        res.render('example', {
            breeds: breeds
        });
    });
});

// HTML Routes

router.get('/survey', (req, res) => {
    res.render('survey', {
        questions: qBank
    });
});


router.get('/results', (req, res) => {
    res.render('results');
});


// Example Dog Routes
router.post('/dogs', (req, res) => {
    if (req.body.breed !== '') {
        dogs.insertOne(req.body.breed, (data) => res.redirect('/'));
    } else {
        res.redirect('/');
    }
});
router.put('/dogs/:id', (req, res) => {
    dogs.updateOne('height', 1, req.params.id, (data) => res.redirect('/'));
});
router.delete('/dogs/:id', (req, res) => {
    dogs.deleteOne(req.params.id, (data) => res.redirect('/'));
});

// catch-all for incorrect get requests
router.get('*', (req, res) => {
    res.send('404')
});

module.exports = router;