// IMPORTAR ROUTER DE EXPRESS
const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')
// INSTANCIAR LA VARIABLE ROUTER
const router = Router()

// Ruta para mostrar el formulario de registro
router.get('/user/register', redirectIfAuthenticated, renderRegisterForm)
// Ruta para capturar los datos del formulario de registro
router.post('/user/register',registerNewUser)

// Ruta para mostrar el formulario de Login
router.get('/user/login', redirectIfAuthenticated, renderLoginForm)
// Ruta para capturar los datos del formulario y realizar el proceso de Login en conjunto con BDD
router.post('/user/login',loginUser)

// Ruta para cerrar sesion del usuario
router.post('/user/logout',logoutUser)


module.exports =router