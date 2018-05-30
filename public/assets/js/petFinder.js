var url = 'http://api.petfinder.com/pet.find';
var petApiKey = 'feac31e797b10511584809f14f866c76';
var zip = $('#mapZip').text()

var breeds = $('#dogsView').attr('data-breeds').split(',');
var size = $('#dogsView').attr('data-size');

function translateSize(oldSize) {
    var newSize;
    if (oldSize == 'small') newSize = 'S';
    else if (oldSize == 'medium') newSize = 'M';
    else if (oldSize == 'extra-large') newSize = "L";
    return newSize;
}

size = translateSize(size);
console.log(breeds);
console.log(size);

$.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        key: petApiKey,
        animal: 'dog',
        size: size,
        // breed: breeds[0],
        location: zip,
        output: 'full',
        count: 5,
        format: 'json'
    }
}).then(function(response) {
    console.log(response)
    for (var i = 0; i < 5; i++) {
        var dogName = response.petfinder.pets.pet[i].name.$t; //works
        var img = response.petfinder.pets.pet[i].media.photos.photo[3].$t;
        // var img = response.petfinder.pets.pet[i].media.photos.photo[0].$t; //works
        //var breed1 = response.petfinder.pets.pet[i].breeds.breed[0].$t;//nope
        //var breed2 = response.petfinder.pets.pet[i].breeds.breed[1].$t;//nope
        var age = response.petfinder.pets.pet[i].age.$t; //works
        var size = response.petfinder.pets.pet[i].size.$t; //works
        //var id = response.petfinder.pets.pet[i].id.$t;

        var email = response.petfinder.pets.pet[i].contact.email.$t;
        var phone = response.petfinder.pets.pet[i].contact.phone.$t;
        //var fullAddress = address + city + state + zip

        // console.log(dogName)
        // console.log(img)
        // console.log(age)
        // console.log(size)
        // console.log(email)
        // console.log(phone)
        //console.log(fullAddress)
        //console.log(id)
        //console.log(breed1)
        //console.log(breed2)
        var DogDiv = $("<div class='dog'>");

        var pupName = $("<h3>").text("Name: " + dogName);
        DogDiv.append(pupName);

        var dogPic = $("<img>").attr("src", img);
        DogDiv.append(dogPic)

        //var dogBreeds = $("<p>").text("Breeds:" + " " + breed1 + ", " + breed2)
        //DogDiv.append(dogBreeds)

        var dogAge = $("<p>").text("Age:" + " " + age)
        DogDiv.append(dogAge)

        var dogSize = $("<p>").text("Size:" + size)
        DogDiv.append(dogSize)

        var dogEmail = $("<p>").text("Email:" + email)
        DogDiv.append(dogEmail)

        var dogPhone = $("<p>").text("Phone:" + phone)
        DogDiv.append(dogPhone)

        // var dogID = $("<p>").text("Pet ID Number:" + id)
        // DogDiv.append(dogID)

        //Putting the pet info in the existing div
        $("#dogsView").append(DogDiv);

    }
})