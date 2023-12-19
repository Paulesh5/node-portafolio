// IMPORTAR CLOUDINARY
const cloudinary = require('cloudinary').v2


// ESTABLECER LAS VARIABLES DE ENTORNO
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

// CREAR EL MÉTODO PARA ENVIAR LA IMAGEN A CLOUDINARY Y QUE LA MISMA SE ALMACENE EN UN DIRECTORIO LLAMADA PORTAFOLIO
module.exports.uploadImage = async(filePath) => {
    return await cloudinary.uploader.upload(filePath,{folder:'portafolio'})
}