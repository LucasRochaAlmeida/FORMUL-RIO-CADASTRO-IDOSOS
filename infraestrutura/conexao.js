//conexão BD
const mysql = require('mysql2')


const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'CpdVgp@2020', //CpdVgp@2020
    database: 'cadastroidosos60'
})

module.exports = conexao