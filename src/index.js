// CARGAR TODAS LAS VARIABLES DE ENTORNO
require('dotenv').config()

// IMPORTAR LA VARIABLE
const app = require('./server.js')
const connection = require('./database.js')

connection()

// OBTENER DEL VALOR DEL PUERTO
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})