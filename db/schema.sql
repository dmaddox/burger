-- to run from Terminal: mysql -u username -p password database_name < file.sql

-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- date: a TIMESTAMP.

-- DELETE DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured boolean NOT NULL,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
