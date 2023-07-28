const {MongoClient} = require('mongodb');
var ObjectID = require('mongodb').ObjectId;

const uri = "mongodb://root:example@127.0.0.1:27017/"

async function incluirTopFa(documento) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db("mauacompanhadoBD");
      const collection = db.collection("topfas");
      result = await collection.insertOne(documento);
    } catch (e) {
        throw e;
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
}

async function consultaTopFas(topfa) {
    const client = new MongoClient(uri);
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
        throw e;
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
  
    return data
}

async function alteraStatusTopFa(document) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db("mauacompanhadoBD");
      const collection = db.collection("topfas");
      result = await collection.updateOne({ "_id": new ObjectID(document._id) }, { $set: {"status": "Mencionado" } });
    } catch (e) {
        throw e;
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
}


module.exports = { incluirTopFa, consultaTopFas, alteraStatusTopFa }