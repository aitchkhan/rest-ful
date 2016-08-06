'use strict';

const IP = process.env.IP || "192.168.1.105";
const PORT = process.env.port;
let config = {
  "dbPath": "mongodb://" + IP + "/restFull",
    "port": PORT || 8000
}

console.log(IP);



module.exports = config;