const express = require('express')
const bodyParser = require('body-parser')
const dadosService = require("./src/services/dadosService");

const app = express()
const port = 3000;

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
        await dadosService.incluiTopFa(documento)
        res.status(200).send(JSON.stringify('Tudo certo! É só aguardar a gravação do programa.'))
    }
    catch(e) {
        res.status(500).send(JSON.stringify(e))
    }
})

app.get('/ProximosTopFas', async (req, res) => {
    let param = req.query
    try {
        var topfas = await dadosService.consultaTopFas(param.topfa)
        res.status(200).send(topfas)
    }
    catch(e) {
        res.status(500).send(JSON.stringify(e))
    }
})

app.put('/TopFas', async (req, res) => {
    let documents = req.body
    error = false;
    msg = "";

    await documents.forEach(document => {
        try {
            dadosService.alteraStatusTopFa(document)
        }
        catch (e) {
            error = true;
        }
    });

    if (error) {
        res.status(500).send(JSON.stringify('Nem todos os registros foram atualizados. Por favor, tente novamente.'))
    }
    else {
        res.status(200).send(JSON.stringify('Pronto! Registros foram marcados como lidos.'))
    }
})