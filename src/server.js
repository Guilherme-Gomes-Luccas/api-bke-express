const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/user', (req, res) =>{
    res.json({nome: "Guilherme", email: "guilhermegomes.luccas@gmail.com"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})