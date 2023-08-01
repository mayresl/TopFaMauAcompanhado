const express = require('express')
const bodyParser = require('body-parser')
const dadosService = require("./src/services/dadosService");
const { logger } = require('./src/services/loggerService');

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
    logger.info("Servidor node iniciado. URL: http://localhost:" + port);
})

app.post('/TopFa', async (req, res) => {
    let documento = req.body
    logger.info("Body da requisição POST para \/TopFa: " + JSON.stringify(documento));

    documento.status = "Enviado"
    documento.dataHora = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    });

    try {
        await dadosService.incluiTopFa(documento)
        logger.info("Requisição POST para \/TopFa feita com sucesso.");
        res.status(200).send(JSON.stringify('Tudo certo! É só aguardar a gravação do programa.'))
    }
    catch(e) {
        logger.error("Requisição POST para \/TopFa falhou.");
        res.status(500).send(JSON.stringify(e))
    }
})

app.get('/ProximosTopFas', async (req, res) => {
    let param = req.query
    logger.info("Parâmetros da requisição GET para \/ProximosTopFas: " + JSON.stringify(param));
    
    try {
        var topfas = await dadosService.consultaTopFas(param.topfa)
        logger.info("Requisição GET para \/ProximosTopFas feita com sucesso.");
        res.status(200).send(topfas)
    }
    catch(e) {
        logger.error("Requisição GET para \/ProximosTopFas falhou.");
        res.status(500).send(JSON.stringify(e))
    }
})

app.put('/TopFas', async (req, res) => {
    let documentos = req.body
    logger.info("Body da requisição PUT para \/TopFas: " + JSON.stringify(documentos));

    erro = false;
    msg = "";

    await documentos.forEach(documento => {
        try {
            dadosService.alteraStatusTopFa(documento)
        }
        catch (e) {
            erro = true;
        }
    });

    if (erro) {
        logger.error("Requisição PUT para \/TopFas falhou. Verificar logs de exceções para mais detalhes.");
        res.status(500).send(JSON.stringify('Nem todos os registros foram atualizados. Por favor, tente novamente.'))
    }
    else {
        logger.info("Requisição PUT para \/TopFas feita com sucesso.");
        res.status(200).send(JSON.stringify('Pronto! Registros foram marcados como lidos.'))
    }
})