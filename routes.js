const express = require('express');
const router = express.Router();

const dogs = require('./app/dogs/dogs_controller.js');
const qBank = require('./app/questions/qbank.js');

// Global variables to pass into the results page
let zipSearch = 92129;
let breedSearchJSON = [{
        id: 47,
        breed: 'Chinese Crested',
        height: 13,
        weight: 12,
        size: 'small',
        child_friendly: 'yes',
        energy_level: 'low'
    },
    {
        id: 49,
        breed: 'Japanese Chin',
        height: 11,
        weight: 11,
        size: 'small',
        child_friendly: 'yes',
        energy_level: 'low'
    }
];

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
    res.render('results', { // Can this info be used in the handlebars file?
        breeds: breedSearchJSON,
        zip: zipSearch
    });
});


// API Routes

router.post('/results', (req, res) => {
    zipSearch = req.body.zip;
    console.log('\nzipSearch: ', zipSearch);
    if (req.body.a4 == 'toddlers' || req.body.a4 == 'youngKids') {
        dogs.selectNotAndWhereAndWhere('child_friendly', 'no', 'size', req.body.a6, 'energy_level', req.body.a5, (data) => {
            breedSearchJSON = data;
            console.log('\nbreedSearchJSON: ', breedSearchJSON);

            // How to redirect to results page? Help!
            // res.json(data);
            // res.render('/results');
            res.redirect('/results');
        });
    } else {
        dogs.selectWhereAndWhere('size', req.body.a6, 'energy_level', req.body.a5, (data) => {
            breedSearchJSON = data;
            console.log('\nbreedSearchJSON: ', breedSearchJSON);

            // How to redirect to results page? Help!
            // res.json(data);
            // res.render('/results');
            res.redirect('/results');
        });
    }
    // res.json(req.body);
    // res.redirect('/results');
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