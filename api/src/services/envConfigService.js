var dotenv = require('dotenv');
dotenv.config();

var config = {
    MONGO_URI: process.env.MONGO_URI,
    HTTPS_PORT: process.env.HTTPS_PORT,
    HTTP_PORT: process.env.HTTP_PORT,
    SERVER_IP: process.env.SERVER_IP,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_COLLECTION: process.env.MONGO_COLLECTION
}

module.exports = { config }