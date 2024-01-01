// Importar el modelo
const Portfolio = require('../models/Portfolio')

// PRIMERA FUNCION PARA RENDERIZAR EL INDEX
// Metodo para listar todos los portafolios
const renderIndex = async(req,res)=>{
    // Consultar todos los portafolios, transformar a JSON y almacenarlos en la variable portfolios
    const portfolios = await Portfolio.find().lean()
    // Invocar la vista index y pasar la variable portfolios
    res.render('index',{portfolios})
}

// Exportacion de una funcion
module.exports ={
    renderIndex
}