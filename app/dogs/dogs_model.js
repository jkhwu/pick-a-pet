const orm = require('../config/orm.js');

const model = {
    selectAll: (cb) => orm.selectAll('dogs_table', cb),
    selectWhere: (id, cb) => orm.selectWhere('dogs_table', 'id', id, cb),
    insertOne: (breed, cb) => orm.insertOne('dogs_table',
        'breed', breed, cb),
    updateOne: (column, newValue, id, cb) => orm.updateOne('dogs_table', column, newValue, id, cb),
    deleteOne: (id, cb) => orm.deleteOne('dogs_table', id, cb),
}

module.exports = model;

// =============== TEST CODE ===============
// model.insertOne('Raisin Dog', console.log);
// model.updateOne('height', 1, 257, console.log);
// model.selectWhere(257, console.log);
// model.deleteOne(257, console.log);
// model.selectAll(console.log);