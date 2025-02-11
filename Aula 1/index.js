const express = require ('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send ('Olá, mundo! Servidor rodando com express')
})
app.get ('/home', (req, res) => {
    res.send ('Pagina home')
})
app.get ('/login', (req, res) => {
    res.send ('Pagina Login')
})

app.listen (port, () => {
    console.log ('Servidor rodando na porta', port)
})