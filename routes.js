const express = require('express');
const router = express.Router();

const dogs = require('./app/dogs/dogs_controller.js');
const qBank = require('./app/questions/qbank.js');

// Yelp Require
const yelpApiKey = '-q3CtZLqwY8BtuZ63pVZQAZdmfYtHqxEscODo8xV9G98V4mLaQkCVtrlTfDKUHNzdGsmjneOeKSNSrOmfvGElWiuvAZTcHKUgsNPBukQYlZyznB8leXH7zGmo437WnYx';
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
// let zip = 92129;
// let children = 'noKids';
// let energyLevel = 'low';
// let size = 'small';
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
    if (answers.kids == 'toddlers' || answers.kids == 'youngKids') {
        dogs.selectNotAndWhereAndWhere('child_friendly', 'no', 'size', answers.size, 'energy_level', answers.energyLevel, (data) => {
            breedSearchJSON = data;
            console.log('\nbreedSearchJSON: ', breedSearchJSON);
            res.render('results', {
                breeds: breedSearchJSON,
                zip: answers.zip
            });
        });
    } else {
        dogs.selectWhereAndWhere('size', req.body.a6, 'energy_level', req.body.a5, (data) => {
            breedSearchJSON = data;
            console.log('\nbreedSearchJSON: ', breedSearchJSON);
            res.render('results', {
                breeds: breedSearchJSON,
                zip: answers.zip
            });
        });
    }

});


// API Routes

router.post('/results', (req, res) => {
    console.log(req.body);
    answers = req.body;
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