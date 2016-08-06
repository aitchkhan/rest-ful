/**
 * Created by hkhan on 7/30/16.
 */

const mongoose = require('mongoose');
const config = require('./config/config.js');

mongoose.connect(config.dbPath);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("ERROR occured from DB:" + error);
});

db.once('open', () => {
    console.log("Successfully opened the db!");
});

module.exports = mongoose;