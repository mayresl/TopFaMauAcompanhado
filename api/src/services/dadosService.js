const {MongoClient, ServerApiVersion} = require('mongodb');
var ObjectID = require('mongodb').ObjectId;

const { logger } = require('./loggerService');
const { config } = require('./envConfigService');

const client = new MongoClient(config.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const mongoDB = config.MONGO_DB;
const mongoCollection = config.MONGO_COLLECTION;

async function incluiTopFa(documento) {
    try {
      await client.connect();
      const db = client.db(mongoDB);
      const collection = db.collection(mongoCollection);
      result = await collection.insertOne(documento);
    } catch (e) {
      logger.error(`${e.message}. Stack trace: ${e.stack}`);
      throw new Error(e);
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
}

async function consultaTopFas(topfa) {
    var data = []
    try {
      await client.connect();
      const db = client.db(mongoDB);
      var query = { status: "Enviado" }
      if (topfa != '') {
        query.topfa = topfa
      }
      data = await db.collection(mongoCollection).find(query).sort({ _id: 1 }).toArray();
    } catch (e) {
      logger.error(`${e.message}. Stack trace: ${e.stack}`);
      throw new Error(e);
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }  
    return data
}

async function alteraStatusTopFa(document) {
    try {
      await client.connect();
      const db = client.db(mongoDB);
      const collection = db.collection(mongoCollection);
      result = await collection.updateOne({ "_id": new ObjectID(document._id) }, { $set: {"status": "Mencionado" } });
    } catch (e) {
      logger.error(`${e.message}. Stack trace: ${e.stack}`);
      throw new Error(e);
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
}

module.exports = { incluiTopFa, consultaTopFas, alteraStatusTopFa }