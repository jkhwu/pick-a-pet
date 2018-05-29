const qBank = [{
    id: 1,
    q: "What type of home / living space do you have?",
    c: [
        { id: 1, qNum: 1, option: "apartment" },
        { id: 2, qNum: 1, option: "small house" },
        { id: 3, qNum: 1, option: "large house" }
    ]
}, {
    id: 2,
    q: "How big is your yard?",
    c: [
        { id: 1, qNum: 2, option: "I don’t have a yard, but there are parks nearby!" },
        { id: 2, qNum: 2, option: "Small and cozy" },
        { id: 3, qNum: 2, option: "So large I can’t see my neighbors" }
    ]
}, {
    id: 3,
    q: "How long would your dog be alone each week?",
    c: [
        { id: 1, qNum: 3, option: "Not at all" },
        { id: 2, qNum: 3, option: "10-20 hours" },
        { id: 3, qNum: 3, option: "20-40 hours" },
        { id: 4, qNum: 3, option: "More than 40 hours" }
    ]
}, {
    id: 4,
    q: "How old is the youngest kid in your home or visiting your home?",
    c: [
        { id: 1, qNum: 4, option: "No kids" },
        { id: 2, qNum: 4, option: "Under 5" },
        { id: 3, qNum: 4, option: "6-12" },
        { id: 4, qNum: 4, option: "Over 12" }
    ]
}, {
    id: 5,
    q: "How much daily exercise will you give your dog?",
    c: [
        { id: 1, qNum: 5, option: "None, i’m a couch potato" },
        { id: 2, qNum: 5, option: "30 min - 1 hr" },
        { id: 3, qNum: 5, option: "More than 1 hour" }
    ]
}, {
    id: 6,
    q: "What size dog are you looking for?",
    c: [
        { id: 1, qNum: 6, option: "Toy" },
        { id: 2, qNum: 6, option: "Small" },
        { id: 3, qNum: 6, option: "Medium" },
        { id: 4, qNum: 6, option: "Large" },
        { id: 5, qNum: 6, option: "Don’t care" }
    ]
}, {
    id: 7,
    q: "How old would you like your dog to be?",
    c: [
        { id: 1, qNum: 7, option: "puppy" },
        { id: 2, qNum: 7, option: "young" },
        { id: 3, qNum: 7, option: "adult" },
        { id: 4, qNum: 7, option: "senior" },
        { id: 5, qNum: 7, option: "don’t care" }
    ]
}, {
    id: 8,
    q: "How long should your dog’s coat be?",
    c: [{ id: 1, qNum: 8, option: "short" },
        { id: 2, qNum: 8, option: "medium" },
        { id: 3, qNum: 8, option: "long" },
        { id: 4, qNum: 8, option: "don’t care" }
    ]
}, {
    id: 9,
    q: "Do you want a dog that will protect you?",
    c: [
        { id: 1, qNum: 9, option: "Nope, just want a companion" },
        { id: 2, qNum: 9, option: "No, but a mean bark won’t hurt" },
        { id: 3, qNum: 9, option: "Yes, and I plan to bite-train." }
    ]
}, {
    id: 10,
    q: "Have you owned a dog before?",
    c: [
        { id: 1, qNum: 10, option: "Yes" },
        { id: 2, qNum: 10, option: "No" }
    ]
}];

module.exports = qBank;