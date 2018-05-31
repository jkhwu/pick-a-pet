require('dotenv').config();
const express = require('express');
const router = express.Router();

const dogs = require('./app/dogs/dogs_controller.js');
const qBank = require('./app/questions/qbank.js');

// import keys
const keys = require('./keys.js');
const petfinderKey = keys.petfinder.api_key;
const petfinderSecret = keys.petfinder.api_secret;
const googlemapsKey = keys.googlemaps.api_key;
const yelpApiKey = keys.yelp.api_key;

// Yelp Require
var yelp = require('yelp-fusion');
var client = yelp.client(yelpApiKey);

// Global variables to pass into the results page

let answers = {
    homeSize: 'apartment',
    yardSize: 'noYard',
    timeAlone: 'notAlone',
    kids: 'noKids',
    energyLevel: 'low',
    size: 'small',
    age: 'baby',
    coatLength: 'short',
    guardLevel: 'noGuard',
    experience: 'yes',
    zip: '92129'
};

// let breedSearchArray = ['Terrier', 'Shepherd'];
let breedSearchArray = [];



// HTML Routes

router.get('/', (req, res) => {
    res.render('login', {
        answers: answers
    });
});

router.get('/survey', (req, res) => {
    res.render('survey', {
        questions: qBank
    });
});

router.get('/results', (req, res) => {
    if (answers.kids == 'toddlers' || answers.kids == 'youngKids') {
        dogs.selectNotAndWhereAndWhere('child_friendly', 'no', 'size', answers.size, 'energy_level', answers.energyLevel, (data) => {
            console.log('data: ', data);
            breedSearchArray = pullOutBreeds(data);
            console.log('\nbreedSearchArray: ', breedSearchArray);
            res.render('results', {
                breeds: breedSearchArray,
                zip: answers.zip,
                size: answers.size,
                petfinderKey: petfinderKey,
                googlemapsKey: googlemapsKey
            });
        });
    } else {
        dogs.selectWhereAndWhere('size', answers.size, 'energy_level', answers.energyLevel, (data) => {
            console.log('data: ', data);
            breedSearchArray = pullOutBreeds(data);
            console.log('\nbreedSearchArray: ', breedSearchArray);
            res.render('results', {
                breeds: breedSearchArray,
                zip: answers.zip,
                size: answers.size,
                petfinderKey: petfinderKey,
                googlemapsKey: googlemapsKey
            });
        });
    }

});


// API Routes

router.post('/results', (req, res) => {
    answers = req.body;
    console.log('\nANSWERS SUBMITTED: ', answers);
    res.redirect('/results');
});

router.post('/yelp', (req, res) => {
    console.log(req.body);
    client.search({
            term: req.body.searchTerm,
            location: req.body.zipCode,
        })
        .then(response => {
            const results = response.jsonBody.businesses;
            res.json({
                clientSideData: req.body.searchTerm,
                serverSideData: results
            })
        }).catch(e => {
            console.log(e);
        });
})

// Example Layout - Get All Dogs from DB
router.get('/example', (req, res) => {
    var breeds;
    dogs.selectAll((breedData) => {
        breeds = breedData;
        res.render('example', {
            breeds: breeds
        });
    });
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

// Helper Function

function pullOutBreeds(data) {
    var breedArray = [];
    data.forEach(element => {
        console.log(element.breed);
        breedArray.push(element.breed);
    });
    return breedArray;
}

module.exports = router;