const dbconfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbconfig.url,
    mahasiswa: require('./mahasiswa.model.js')(mongoose)
}