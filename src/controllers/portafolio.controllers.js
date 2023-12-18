
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
    res.redirect('/portafolios')
}

// METODO PARA ACTUALIZAR EL FORMULARIO
const renderEditPortafolioForm =async(req,res)=>{
    // Consulta del portafolio en BDD con ID
    const portfolio = await Portfolio.findById(req.params.id).lean()
    res.render('portafolio/editPortfolio',{portfolio})
}

// METODO PARA ACTUALIZAR EN LA BDD LO CAPTURADO EN EL FORM
const updatePortafolio = async(req,res)=>{
    // CAPTURAR LOS DATOS DEL BODY
    const {title,category,description}= req.body
    // ACTUALIZAR EL PORTAFOLIO EN BDD
    await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
    // REDIRECCIONAR
    res.redirect('/portafolios')
}

// METODO PARA ELIMINAR EN LA BDD
const deletePortafolio = async(req,res)=>{
    // Capturar el Id del portafolio
    await Portfolio.findByIdAndDelete(req.params.id)
    res.redirect('/portafolios')
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