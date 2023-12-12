// IMPORTAR ROUTES DE EXPRESS
const {Router} = require('express')
const { renderIndex } = require('../controllers/index.controllers')
const { renderLogin } = require('../controllers/index.controllers')

// INSTANCIAR ROUTES
const router = Router()

router.get('/',renderIndex)

router.get('/login',renderLogin)

// EXPORTAR LA VARIABLE ROUTER
module.exports = router