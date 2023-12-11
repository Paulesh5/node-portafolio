const express = require('express')
const path = require('path');
// IMPORTAR HANDLEBARS
const { engine }  = require('express-handlebars')

// Inicializaciones
const app = express()

// Configuraciones 
// Variables de configuracion
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
// ESTABLECER EL PATH DE LA CARPETA VIEWS
app.set('views',path.join(__dirname, 'views'))
// ESTABLECER LAS CONFIGURACIONES EXTRAS
app.engine('.hbs',engine({
    //ESTABLECER EL MASTER PAGE
    defaultLayout:'main',
    // ESTABLECER EL PATH DE LA CARPETA LAYOUTS
    layoutsDir: path.join(app.get('views'),'layouts'),
    // ESTABLECER EL PATH DE LA CARPETA PARTIALS
    partialsDir: path.join(app.get('views'),'partials'),
    // EXSTABLECER LA EXTENSION DE LAS PAGINAS
    extname:'.hbs'
}))
// ESTABLECER EL MOTOR DE PLANTILLAS
app.set('view engine','.hbs')

// Middlewares 
// SERVIDOR VA A TRABAJAR CON INFORMACION EN BASE A FORMULARIOS
app.use(express.urlencoded({extended:false}))


// Variables globales

// Rutas 
app.use(require('./routers/index.routes'))

// Archivos estáticos
// DEFINIR ARCHIVOS ESTATICOS Y PUBLICOS
app.use(express.static(path.join(__dirname,'public')))

// EXPORTAR LA VARIABLE APP
module.exports = app