// Metodo para proteger rutas y a la vez esta siendo exportado
module.exports.isAuthenticated = (req,res,next)=>{
    // Si existe un inicio de sesion
    if(req.isAuthenticated()){
        // Continuar
        return next()
    }
    // Redireccionamiento
    res.redirect('/user/login')
}

//  Crear un metodo para validar lo siguiente
// Redireccionamiento a la vista portafolios si el usuario a inicio sesion
module.exports.redirectIfAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/portafolios');
    }
        return next();
}