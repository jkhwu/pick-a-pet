const qBank = [{
    id: 1,
    q: "What type of home / living space do you have?",
    c: [
        { id: 1, qNum: 1, value: "apartment", option: "apartment" },
        { id: 2, qNum: 1, value: "smallHouse", option: "small house" },
        { id: 3, qNum: 1, value: "largeHouse", option: "large house" }
    ]
}, {
    id: 2,
    q: "How big is your yard?",
    c: [
        { id: 1, qNum: 2, value: "noYard", option: "I don’t have a yard, but there are parks nearby!" },
        { id: 2, qNum: 2, value: "smallYard", option: "Small and cozy" },
        { id: 3, qNum: 2, value: "bigYard", option: "So large I can’t see my neighbors" }
    ]
}, {
    id: 3,
    q: "How long would your dog be alone each week?",
    c: [
        { id: 1, qNum: 3, value: "notAlone", option: "Not at all" },
        { id: 2, qNum: 3, value: "lowAlone", option: "10-20 hours" },
        { id: 3, qNum: 3, value: "mediumAlone", option: "20-40 hours" },
        { id: 4, qNum: 3, value: "highAlone", option: "More than 40 hours" }
    ]
}, {
    id: 4,
    q: "How old is the youngest kid in your home or visiting your home?",
    c: [
        { id: 1, qNum: 4, value: "noKids", option: "No kids" },
        { id: 2, qNum: 4, value: "toddlers", option: "Under 5" },
        { id: 3, qNum: 4, value: "youngKids", option: "6-12" },
        { id: 4, qNum: 4, value: "teens", option: "Over 12" }
    ]
}, {
    id: 5,
    q: "How much daily exercise will you give your dog?",
    c: [
        { id: 1, qNum: 5, value: "low", option: "None, i’m a couch potato" },
        { id: 2, qNum: 5, value: "medium", option: "30 min - 1 hr" },
        { id: 3, qNum: 5, value: "high", option: "More than 1 hour" }
    ]
}, {
    id: 6,
    q: "What size dog are you looking for?",
    c: [
        { id: 1, qNum: 6, value: "small", option: "Small or Toy" },
        { id: 2, qNum: 6, value: "medium", option: "Medium" },
        { id: 3, qNum: 6, value: "extra-large", option: "Large" },
        { id: 5, qNum: 6, value: "don't-care", option: "Don’t care" }
    ]
}, {
    id: 7,
    q: "How old would you like your dog to be?",
    c: [
        { id: 1, qNum: 7, value: "baby", option: "puppy" },
        { id: 2, qNum: 7, value: "young", option: "young" },
        { id: 3, qNum: 7, value: "adult", option: "adult" },
        { id: 4, qNum: 7, value: "senior", option: "senior" },
        { id: 5, qNum: 7, value: "don't-care", option: "don’t care" }
    ]
}, {
    id: 8,
    q: "How long should your dog’s coat be?",
    c: [{ id: 1, qNum: 8, value: "short", option: "short" },
        { id: 2, qNum: 8, value: "medium", option: "medium" },
        { id: 3, qNum: 8, value: "long", option: "long" },
        { id: 4, qNum: 8, value: "don't-care", option: "don’t care" }
    ]
}, {
    id: 9,
    q: "Do you want a dog that will protect you?",
    c: [
        { id: 1, qNum: 9, value: "noGuard", option: "Nope, just want a companion" },
        { id: 2, qNum: 9, value: "mediumGuard", option: "No, but a mean bark won’t hurt" },
        { id: 3, qNum: 9, value: "yesGuard", option: "Yes, and I plan to bite-train." }
    ]
}, {
    id: 10,
    q: "Have you owned a dog before?",
    c: [
        { id: 1, qNum: 10, value: "yes", option: "Yes" },
        { id: 2, qNum: 10, value: "no", option: "No" }
    ]
}];

module.exports = qBank;