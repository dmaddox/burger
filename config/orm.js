var connection = require("./connection.js");

var orm = {
  // display burgers
  selectAll: function(selection, table) {
    var queryString = "SELECT ?? FROM ??;";
    connection.query(queryString, [selection, table], function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
    });
  },
  // add a burger
  insertOne: function(burger) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    // var queryString = "INSERT INTO burgers";
    // queryString += " (burger_name, devoured)";
    // queryString += "VALUES (";
    // queryString += burger;
    // queryString += ", false) ";

    console.log(queryString);
    connection.query(queryString, [burger], function(err, result, callback) {
        if (err) {
          throw err;
        }
        console.log(result);
    });
  },
  // change a burger from not eaten to eaten
  updateOne: function(id) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], function(err, result, callback) {
        if (err) {
          throw err;
        }
        console.log(result);
    });
  }
};

module.exports = orm;
