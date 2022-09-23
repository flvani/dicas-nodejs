//const { Person } = require("./person");

const dotenv = require("dotenv");
//const app = require("express");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
require("./modules/express");

//const person = new Person("Flávio");
