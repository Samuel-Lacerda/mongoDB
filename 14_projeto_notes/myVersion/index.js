// Configurações

const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')


const app = express()
const port = 8000


// Template engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


// Rotas
app.get('/', function(req,res){
    res.send('O aplicativo está funcionando.')
})


app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`)
})