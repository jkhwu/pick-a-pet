const model = require('./dogs_model.js');

const dogs = {
    selectAll: (cb) => model.selectAll(cb),
    selectWhere: (id, cb) => model.selectWhere(id, cb),
    insertOne: (breed, cb) => model.insertOne(breed, cb),
    updateOne: (column, newValue, id, cb) => model.updateOne(column, newValue, id, cb),
    deleteOne: (id, cb) => model.deleteOne(id, cb),
}

module.exports = dogs;

// =============== TEST CODE ===============
// dogs.insertOne('Raisin Dog', console.log);
// dogs.updateOne('height', 1, 258, console.log);
// dogs.selectWhere(258, console.log);
// dogs.deleteOne(258, console.log);
// dogs.selectAll(console.log);