const express = require('express')
const path = require('path');
// IMPORTAR HANDLEBARS
const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const fileUpload = require('express-fileupload')

// Inicializaciones
const app = express()
require('./config/passport')

// Configuraciones 
// Variables de configuracion
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))
// ESTABLECER EL PATH DE LA CARPETA VIEWS
app.set('views',path.join(__dirname, 'views'))

// ESTABLECER LA PARPETA TEMPORAL Y EL DIRECTORIO
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));
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
app.use(methodOverride('_method'))

// Configurar la sesion del usuario
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
// Inicializar passportjs y session
app.use(passport.initialize())
app.use(passport.session())


// Variables globales

// Crear una variable blogal
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null// .email para que salga el correo en lugar del nombre
    next()
})

// Rutas 
app.use(require('./routers/index.routes'))

app.use(require('./routers/portafolio.routes'))

app.use(require('./routers/user.routes'))

// Archivos estáticos
// DEFINIR ARCHIVOS ESTATICOS Y PUBLICOS
app.use(express.static(path.join(__dirname,'public')))

// EXPORTAR LA VARIABLE APP
module.exports = app