const sqlite3 = require('sqlite3')
const { open } = require('sqlite') // { open } significa que eu só pego o open do sqlite

module.exports = () =>
  open({
    filename: './src/db/rocketq.sqlite', // qual arquivo escolher
    driver: sqlite3.Database // quem comanda o banco de dados
  })
