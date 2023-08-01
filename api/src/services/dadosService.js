const {MongoClient, ServerApiVersion} = require('mongodb');
var ObjectID = require('mongodb').ObjectId;

const { logger } = require('./loggerService');

var dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function incluiTopFa(documento) {
    try {
      await client.connect();
      const db = client.db("mauacompanhadoBD");
      const collection = db.collection("topfas");
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
      const db = client.db("mauacompanhadoBD");
      var query = { status: "Enviado" }
      if (topfa != '') {
        query.topfa = topfa
      }
      data = await db.collection('topfas').find(query).sort({ dataHora: 1 }).toArray();
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
      const db = client.db("mauacompanhadoBD");
      const collection = db.collection("topfas");
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