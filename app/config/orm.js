const connection = require("./connection.js");

const orm = {
    selectAll: (table, cb) => {
        console.log("\nSELECT THIS TABLE: " + table);
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    selectWhere: (table, column, value, cb) => {
        console.log(`\nSELECT TABLE ${table} WHERE ${column} = ${value}`);
        let queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    selectNotWhere: (table, column, value, cb) => {
        console.log(`\nSELECT TABLE ${table} WHERE ${column} != ${value}`);
        let queryString = "SELECT * FROM ?? WHERE ?? != ?";
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    selectWhereAndWhere: (table, column1, value1, column2, value2, cb) => {
        console.log(`\nSELECT TABLE ${table} WHERE ${column1} = ${value1} AND ${column2} = ${value2}`);
        let queryString = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
        connection.query(queryString, [table, column1, value1, column2, value2], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    selectNotAndWhereAndWhere: (table, column1, value1, column2, value2, column3, value3, cb) => {
        console.log(`\nSELECT TABLE ${table} WHERE ${column1} != ${value1} AND ${column2} = ${value2} AND ${column3} = ${value3}`);
        let queryString = "SELECT * FROM ?? WHERE ?? != ? AND ?? = ? AND ?? = ?";
        connection.query(queryString, [table, column1, value1, column2, value2, column3, value3], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (table, column, value, cb) => {
        console.log("\nINSERT THIS: " + value);
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: (table, column, newValue, id, cb) => {
        console.log("\nUPDATE ENTRY " + id + " TO " + newValue);
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, column, newValue, id], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    deleteOne: (table, id, cb) => {
        console.log("\nDELETE ENTRY: " + id);
        let queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [table, id], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;

// =============== TEST CODE ===============
// console.log(connection);
// orm.selectWhere('dogs_table', 'id', 2, console.log);
// orm.selectNotWhere('dogs_table', 'child_friendly', 'no', console.log);
// orm.selectWhereAndWhere('dogs_table', 'size', 'extra-large', 'energy_level', 'medium', console.log);
// orm.selectNotAndWhereAndWhere('dogs_table', 'child_friendly', 'no', 'size', 'medium', 'energy_level', 'low', console.log);
// orm.insertOne('dogs_table', 'breed', 'Raisin Dog', console.log);
// orm.updateOne('dogs_table', 'height', '1', 256, console.log);
// orm.deleteOne('dogs_table', 256, console.log);
// orm.selectAll('dogs_table', console.log);