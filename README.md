# TopFaMauAcompanhado
Uma aplicação simples para o podcast Mau Acompanhado do Jovem Nerd.
Mande seu top fã por aqui!

## Instalação e execução
Garanta que Angular v16.1.0 e Node (v18.16.1) estão instalados.

1. Rode o comando `npm i` individualmete nas pastas `api` e `client`
2. Para rodar o servidor, execute o comando `node server.js` na pasta `api`
3. Para rodar a página web, execute o comando `ng serve --open` na pasta `client`
4. Para que o servidor se conecte ao mongo, é necessário criar um arquivo `.env` na raiz de `api`.

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
- [ ] Proteção de APIs (cross origin)
- [ ] Melhorar front
- [ ] Transformar em https
- [ ] Adicionar componente de página não encontrada e redirecionar urls inválidas
- [ ] Prettier?
- [ ] Pesquisar sobre boas práticas Angular/Node e implementar
- [ ] Proteção da URL /listagem?
