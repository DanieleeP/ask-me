const { Sequelize} = require('@sequelize/core')
const connection = require('./database')

const Resposta = connection.define('respostas',{
    corpo: {type: Sequelize.TEXT, AllowNull: false},
    perguntaId: {type: Sequelize.INTEGER, AllowNull: false}
})

Resposta.sync({force: false})
    .then(()=>{
        console.log('Tabela resposta sincronizada')
    }).catch((error) =>{
        console.error('Erro ao sincronizar a tabela resposta')
    })

    module.exports = Resposta