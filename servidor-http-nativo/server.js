import http from 'node:http'
import { URL } from 'node:url'

const PORTA = 3000
const produtos = [
    {id: 1, nome: "Sabonete"},
    {id: 2, nome: "Volante Logitech"},
    {id: 3, nome: "Sabão em Pó"},
    {id: 4, nome: "Pelucia do Sonic"}
]


//res de response e req de request
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    if(req.method == "GET" && req.url == "/contato"){
        console.log(`${req.method} ${req.url}`)

        return res.end(
            JSON.stringify([
                {data: {"número_telefone": "67-99999-9999", endereco: "Rua Alegria, 99, Centro"}}
            ])
        )
    }

    if(req.method == "GET" && req.url == "/produtos"){
        console.log(`${req.method} ${req.url}`)

        return res.end(
            JSON.stringify(produtos)
        )
    }

    if(req.method == "GET" && req.url == "/status"){
        console.log(`${req.method} ${req.url}`)

        return res.end(
            JSON.stringify({status: "ok"})
        )
    }

    else{
        return res.end(JSON.stringify(`Pagina_inexistente! Error ${res.statusCode = 404}`))
    }

    res.end(JSON.stringify({data: "Página inicial"}))
})

server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`)
})