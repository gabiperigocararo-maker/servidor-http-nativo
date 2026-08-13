const http = require('node:http');
const PORTA = 3000;
const server = http.createServer((req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 201;
    res.setHeader('Content-Type','application/json charset=utf-8');

(JSON.stringify({ status: "ok" }))
});

server.listen(PORTA, () => {
    console.log(`Servidor funcionndo na porta ${PORTA}`);
    console.log(`${new Date().toISOString()}`)
})
// se tirar o `res.end()`, ele nao termina d executar entao nao aparece a mensagem no navegador