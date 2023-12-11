// IMPORTAR ESQUEMA Y MODELO
const {Schema, model} = require('mongoose')

// CREAR NUEVO ESQUEMA -- portfolioSchema
const portfolioSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category :{
        type:String,
        require:true
    }
},{
    timestamps:true
})

module.exports = model('portfolio',portfolioSchema)