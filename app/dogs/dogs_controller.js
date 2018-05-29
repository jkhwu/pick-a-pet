const model = require('./dogs_model.js');

const dogs = {
    selectAll: (cb) => model.selectAll(cb),
    selectWhere: (col, val, cb) => model.selectWhere(col, val, cb),
    selectNotWhere: (col, val, cb) => model.selectNotWhere(col, val, cb),
    selectWhereAndWhere: (col1, val1, col2, val2, cb) => {
        model.selectWhereAndWhere(col1, val1, col2, val2, cb);
    },
    selectNotAndWhereAndWhere: (col1, val1, col2, val2, col3, val3, cb) => {
        model.selectNotAndWhereAndWhere(col1, val1, col2, val2, col3, val3, cb);
    },
    insertOne: (breed, cb) => model.insertOne(breed, cb),
    updateOne: (column, newValue, id, cb) => model.updateOne(column, newValue, id, cb),
    deleteOne: (id, cb) => model.deleteOne(id, cb),
}

module.exports = dogs;

// =============== TEST CODE ===============
// dogs.insertOne('Raisin Dog', console.log);
// dogs.updateOne('height', 1, 258, console.log);
// dogs.selectWhere(258, console.log);
// dogs.selectWhereAndWhere('size', 'extra-large', 'energy_level', 'low', console.log);
// dogs.selectNotAndWhereAndWhere('child_friendly', 'yes', 'size', 'medium', 'energy_level', 'high', console.log);
// dogs.deleteOne(258, console.log);
// dogs.selectAll(console.log);