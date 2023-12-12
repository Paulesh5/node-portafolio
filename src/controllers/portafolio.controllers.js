
// IMPORTAR EL MODELO
const Portfolio = require('../models/Portfolio')


// METODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    // LISTAR TODOS LOS PORTAFOLIOS Y TRANSFORMAR EN OBJETOS
    const portfolios = await Portfolio.find().lean()

    // MANDAR A LA VISTA LOS PORTAFOLIOS
    res.render("portafolio/allPortfolios", {portfolios})
}

// METODO PARA LISTAR EL DETALLE DE UN PORTAFOLIO
const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}

// METODO PARA MOSTRAR EL FORMULARIO
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}

// METODO PARA GUARDAR EN LA BDD LO CAPTURADO EN EL FORM
const createNewPortafolio = async(req,res)=>{
    // DESESTRUCTURAR LOS DATOS DEL REQ.BODY
    const {title, category,description} = req.body
    // CREAR UNA NUEVA INSTANCIA
    const newPortfolio = new Portfolio({title,category,description})
    // GUARDAR EN LA BDD
    await newPortfolio.save()
    // MOSTRAR EL RESULTADO
    res.json({newPortfolio})
}

// METODO PARA ACTUALIZAR EL FORMULARIO
const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}

// METODO PARA ACTUALIZAR EN LA BDD LO CAPTURADO EN EL FORM
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}

// METODO PARA ELIMINAR EN LA BDD
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}


// EXPORTACION COMMONJS NOMBRADA (PARA MUCHOS A LA VEZ) - DEFAULT (PARA UNO SOLO)
module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}