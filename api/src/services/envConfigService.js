var dotenv = require('dotenv');
dotenv.config();

var config = {
    MONGO_URI: process.env.MONGO_URI,
    SERVER_PORT: process.env.SERVER_PORT,
    SERVER_IP: process.env.SERVER_IP
}

module.exports = { config }