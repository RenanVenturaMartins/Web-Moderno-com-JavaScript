const porta = 3003;

const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const BancoDeDados = require('./BancoDeDados');
const bodyParser = require('body-parser');

app.use(BodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send (BancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req , res) => {
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req , res) => {
    const produto = BancoDeDados.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req , res) => {
    const produto = BancoDeDados.DeletarProduto(req.params.id)
        res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor operando na porta ${porta}`)
})