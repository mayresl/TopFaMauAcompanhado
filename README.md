# TopFaMauAcompanhado
Uma aplicação simples para o podcast Mau Acompanhado do Jovem Nerd.
Mande seu top fã por aqui!

## Instalação e execução
Garanta que Angular v16.1.0 e Node (v18.16.1) estão instalados.

1. Rode o comando `npm i` individualmete nas pastas `api` e `client`
2. Para rodar o servidor, execute o comando `node server.js` na pasta `api`
3. Para rodar a página web, execute o comando `ng serve --open` na pasta `client`
4. Para que o servidor se conecte ao mongo, é necessário criar um arquivo `.env` na raiz de `api` com o seguinte formato:
```
MONGO_URI=""
NODE_ENV="dev"
HTTPS_PORT=443
HTTP_PORT=80
SERVER_IP="http://localhost"
MONGO_DB="mauacompanhadoBD"
MONGO_COLLECTION="topfas"
```
5. Garanta que o valor `target` em `proxy.config.json` está de acordo com a URL do servidor
6. Também é necessário incluir o arquivo `listagemConfig.ts` na pasta `client/src/assets/` com o seguinte formato:

```
var urlLista = "listagem"

export {urlLista};
```

## Manutenção e colaboração
* Se uma nova variável de ambiente for criada em  `.env`, ela deve ser adicionada em `api/src/services/envConfigService.js` também.

## TODO
- [x] Página 'novo top fã' funcional (angular + mongo)
- [x] Página 'próximos top fãs' (angular + mongo) + roteamento de URL
- [x] Copiar itens selecionados para o clipboard
- [x] Remover itens da lista (angular + mongo)
- [x] Usar mongo do Atlas ao invés de Docker
- [x] Padronizar nomenclaturas de funções e variáveis
- [x] Adicionar logging
- [x] Melhorar/adicionar tratamento de erro
- [x] Centralizar configurações
- [x] Adicionar dbname e collection em config
- [ ] Proteção de APIs? (cross origin)
- [x] Melhorar front
- [ ] Transformar em https
- [x] Adicionar componente de página não encontrada e redirecionar urls inválidas
- [x] Prettier
- [ ] Pesquisar sobre boas práticas Angular/Node e implementar
- [x] Proteção da URL /listagem
- [ ] Criar base de dados de desenvolvimento
