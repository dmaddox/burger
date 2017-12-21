var orm = require("./config/orm.js");

// Console log all the party_name's.
orm.selectAll("*", "burgers");

// Console log all the client_name's.
orm.insertOne("delicious");

// Console log all the parties that have a party-type of grown-up.
orm.updateOne(6);

