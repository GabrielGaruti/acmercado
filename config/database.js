//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userMR:12345@fiaptecnico.ekwgy.mongodb.net/mercado')
}

//exportar as infomações para acesso externo
module.exports = conn 