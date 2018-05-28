const yelpApiKey = '-q3CtZLqwY8BtuZ63pVZQAZdmfYtHqxEscODo8xV9G98V4mLaQkCVtrlTfDKUHNzdGsmjneOeKSNSrOmfvGElWiuvAZTcHKUgsNPBukQYlZyznB8leXH7zGmo437WnYx';
var yelp = require('yelp-fusion');
var client = yelp.client(yelpApiKey);
let center;
const topFiveArray = [];
let searchRequest = {
    term: 'pet-friendly restaurant',
    location: 92128,
};

client.search(searchRequest)
        .then(response => {
            const results = response.jsonBody;
            // this.getTopFive(results);
            console.log(results)
        }).catch(e => {
            console.log(e);
        })

// let Yelp = {
//     getTopFive: function (allResults) {
//         for (let i = 0; i < 5; i++) {
//             const result = allResults[i];
//             const location = result.location;
//             resultInfo = {
//                 resultNum: i + 1,
//                 name: result.name,
//                 coordinates: result.coordinates,
//                 address: location.address1 + ", " + location.city + ", " + location.state + " " + location.zip_code
//             }
//             topFiveArray.push(resultInfo);
//             console.log(topFiveArray);
//         }
//         this.getAverageCoordinates(topFiveArray)
//     },

//     getResults: function(searchRequest) {
//         client.search(searchRequest)
//         .then(response => {
//             const results = response.jsonBody.businesses;
//             this.getTopFive(results);
//         }).catch(e => {
//             console.log(e);
//         });
//     },
    
//     getAverageCoordinates: function(data) {
//         let latArray = [];
//         let lngArray = [];
//         let latSum = 0;
//         let lngSum = 0;
//         data.forEach(element => {
//             latArray.push(element.coordinates.latitude)
//             lngArray.push(element.coordinates.longitude)
//         });
//         latArray.forEach(latitude => {
//             // console.log(latitude);
//             latSum += parseFloat(latitude);
//         });
//         let averageLatitude = latSum / latArray.length;
//         lngArray.forEach(longitude => {
//             // console.log(latitude);
//             lngSum += parseFloat(longitude);
//         });
//         let averageLongitude = lngSum / lngArray.length;
//         console.log(averageLatitude, averageLongitude);
//         center = { averageLatitude, averageLongitude }
//         return center;
//     }
// }

// module.exports = Yelp;