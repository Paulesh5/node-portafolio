// IMPORTAR ROUTER DE EXPRESS
const{Router} = require('express')

const {isAuthenticated} = require('../helpers/validate-auth')

// INSTANCIAR LA VARIABLE ROUTER
const router = Router()

const { renderAllPortafolios,
        renderPortafolio,
        renderPortafolioForm,
        createNewPortafolio,
        renderEditPortafolioForm,
        updatePortafolio,
        deletePortafolio
    } = require('../controllers/portafolio.controllers.js')

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', isAuthenticated, renderPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN BDD
router.post('/portafolio/add', isAuthenticated, createNewPortafolio)

// RUTA PARA PRENSENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', isAuthenticated, renderAllPortafolios)
//RUTA PARA PRENSENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', isAuthenticated, renderPortafolio)

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/edit/:id', isAuthenticated, renderEditPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN LA BDD
router.put('/portafolio/edit/:id', isAuthenticated, updatePortafolio)

// RUTA PARA ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id', isAuthenticated, deletePortafolio)

// EXPORTAR LA VARIABLE RUTA
module.exports = router