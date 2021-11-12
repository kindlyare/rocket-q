const express = require('express')
const route = require('./route') // pegando todos esses, exceto esse com ./ esse estou pegando um arquivo
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log('RODANDO'))
