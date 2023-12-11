// IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')

// INSTANCIAR ROUTES
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

// EXPORTAR LA VARIABLE ROUTER
module.exports = router