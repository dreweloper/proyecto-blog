const mongoose = require('mongoose');

/**
 * @function
 * @async
 * @returns La respuesta de la conexión a MongoDB
 * @throws Mensaje de error
 */

const connection = async () => {

    try {

        /**
         * @const {Object} response Respuesta de la conexión a MongoDB
         */

        const response = await mongoose.connect(process.env.URI_CONNECT);

        if(response){

            console.log('Conectado a la base de datos: MongoDB');
            return response;    

        } else {

            throw{
                ok: false,
                msg: 'ERROR: no se ha podido conectar a la base de datos: MongoDB'
            };

        };
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-CONNECTION


module.exports = connection;