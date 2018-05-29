const orm = require('../config/orm.js');

const model = {
    selectAll: (cb) => orm.selectAll('dogs_table', cb),
    selectWhere: (col, val, cb) => orm.selectWhere('dogs_table', col, val, cb),
    selectNotWhere: (col, val, cb) => orm.selectNotWhere('dogs_table', col, val, cb),
    selectWhereAndWhere: (col1, val1, col2, val2, cb) => {
        orm.selectWhereAndWhere('dogs_table', col1, val1, col2, val2, cb);
    },
    selectNotAndWhereAndWhere: (col1, val1, col2, val2, col3, val3, cb) => {
        orm.selectNotAndWhereAndWhere('dogs_table', col1, val1, col2, val2, col3, val3, cb);
    },
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
// model.selectNotWhere('child_friendly', 'no', console.log);
// model.selectWhereAndWhere('size', 'extra-large', 'energy_level', 'low', console.log);
// model.selectNotAndWhereAndWhere('child_friendly', 'no', 'size', 'medium', 'energy_level', 'low', console.log);
// model.deleteOne(257, console.log);
// model.selectAll(console.log);