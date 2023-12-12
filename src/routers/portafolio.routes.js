// IMPORTAR ROUTER DE EXPRESS
const{Router} = require('express')

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
router.get('/portafolio/add', renderPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN BDD
router.post('/portafolio/add', createNewPortafolio)

// RUTA PARA PRENSENTAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', renderAllPortafolios)
//RUTA PARA PRENSENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', renderPortafolio)

// RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/edit/:id', renderEditPortafolioForm)
// RUTA PARA CAPTURAR LOS DATOS DEL FORM Y GUARDAR EN LA BDD
router.put('/portafolio/edit/:id', updatePortafolio)

// RUTA PARA ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id', deletePortafolio)

// EXPORTAR LA VARIABLE RUTA
module.exports = router