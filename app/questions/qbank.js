const qBank = [{
    id: 1,
    q: "What type of home / living space do you have?",
    c: [
        { id: 1, topic: 'homeSize', value: "apartment", option: "apartment" },
        { id: 2, topic: 'homeSize', value: "smallHouse", option: "small house" },
        { id: 3, topic: 'homeSize', value: "largeHouse", option: "large house" }
    ]
}, {
    id: 2,
    q: "How big is your yard?",
    c: [
        { id: 1, topic: 'yardSize', value: "noYard", option: "I don’t have a yard, but there are parks nearby!" },
        { id: 2, topic: 'yardSize', value: "smallYard", option: "Small and cozy" },
        { id: 3, topic: 'yardSize', value: "bigYard", option: "So large I can’t see my neighbors" }
    ]
}, {
    id: 3,
    q: "How long would your dog be alone each week?",
    c: [
        { id: 1, topic: 'timeAlone', value: "notAlone", option: "Not at all" },
        { id: 2, topic: 'timeAlone', value: "lowAlone", option: "10-20 hours" },
        { id: 3, topic: 'timeAlone', value: "mediumAlone", option: "20-40 hours" },
        { id: 4, topic: 'timeAlone', value: "highAlone", option: "More than 40 hours" }
    ]
}, {
    id: 4,
    q: "How old is the youngest kid in your home or visiting your home?",
    c: [
        { id: 1, topic: 'kids', value: "noKids", option: "No kids" },
        { id: 2, topic: 'kids', value: "toddlers", option: "Under 5" },
        { id: 3, topic: 'kids', value: "youngKids", option: "6-12" },
        { id: 4, topic: 'kids', value: "teens", option: "Over 12" }
    ]
}, {
    id: 5,
    q: "How much daily exercise will you give your dog?",
    c: [
        { id: 1, topic: 'energyLevel', value: "low", option: "None, i’m a couch potato" },
        { id: 2, topic: 'energyLevel', value: "medium", option: "30 min - 1 hr" },
        { id: 3, topic: 'energyLevel', value: "high", option: "More than 1 hour" }
    ]
}, {
    id: 6,
    q: "What size dog are you looking for?",
    c: [
        { id: 1, topic: 'size', value: "small", option: "Small or Toy" },
        { id: 2, topic: 'size', value: "medium", option: "Medium" },
        { id: 3, topic: 'size', value: "extra-large", option: "Large" }
    ]
}, {
    id: 7,
    q: "How old would you like your dog to be?",
    c: [
        { id: 1, topic: 'age', value: "baby", option: "puppy" },
        { id: 2, topic: 'age', value: "young", option: "young" },
        { id: 3, topic: 'age', value: "adult", option: "adult" },
        { id: 4, topic: 'age', value: "senior", option: "senior" },
        { id: 5, topic: 'age', value: "don't-care", option: "don’t care" }
    ]
}, {
    id: 8,
    q: "How long should your dog’s coat be?",
    c: [{ id: 1, topic: 'coatLength', value: "short", option: "short" },
        { id: 2, topic: 'coatLength', value: "medium", option: "medium" },
        { id: 3, topic: 'coatLength', value: "long", option: "long" },
        { id: 4, topic: 'coatLength', value: "don't-care", option: "don’t care" }
    ]
}, {
    id: 9,
    q: "Do you want a dog that will protect you?",
    c: [
        { id: 1, topic: 'guardLevel', value: "noGuard", option: "Nope, just want a companion" },
        { id: 2, topic: 'guardLevel', value: "mediumGuard", option: "No, but a mean bark won’t hurt" },
        { id: 3, topic: 'guardLevel', value: "yesGuard", option: "Yes, and I plan to bite-train." }
    ]
}, {
    id: 10,
    q: "Have you owned a dog before?",
    c: [
        { id: 1, topic: 'experience', value: "yes", option: "Yes" },
        { id: 2, topic: 'experience', value: "no", option: "No" }
    ]
}];

module.exports = qBank;