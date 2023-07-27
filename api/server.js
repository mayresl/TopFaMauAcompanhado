const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb');

const app = express()
const port = 3000;
const uri = "mongodb://root:example@127.0.0.1:27017/"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log('Server started! At http://localhost:' + port)
})

app.post('/TopFa', async (req, res) => {
    let documento = req.body
    documento.status = "Enviado"
    documento.dataHora = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    });

    try {
        await incluirTopFa(documento)
        res.status(200).send(JSON.stringify('Tudo certo! É só aguardar a gravação do programa.'))
    }
    catch(e) {
        res.status(500).send(JSON.stringify(e))
    }
})

app.get('/ProximosTopFas', async (req, res) => {
    try {
        var topfas = await consultaTopFas()
        res.status(200).send(topfas)
    }
    catch(e) {
        res.status(500).send(JSON.stringify(e))
    }
})

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

async function consultaTopFas() {
    const client = new MongoClient(uri);
    var data = []
    try {
      await client.connect();
      const db = client.db("mauacompanhadoBD");
      data = await db.collection('topfas').find({ status: "Enviado" }).sort({ dataHora: 1 }).toArray();
    } catch (e) {
        throw e;
    }
    finally {
      setTimeout(() => {client.close()}, 1500)
    }
  
    return data
}