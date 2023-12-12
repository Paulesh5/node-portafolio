

// PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = (req,res)=>{
    res.render('index')
}

// PRIMERA FUNCION PARA RENDERIZAR EL LOGIN
const renderLogin = (req,res)=>{
    res.render('login')
}

module.exports ={
    renderIndex, 
    renderLogin
}