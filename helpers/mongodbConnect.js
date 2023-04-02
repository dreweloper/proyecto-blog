const mongoose = require('mongoose');


const connection = async () => {

    try {

        const response = await mongoose.connect(process.env.URI_CONNECT);

        console.log('Conectado a la base de datos: MongoDB');
        return response;
        
    } catch (error) {

        return{
            ok: false,
            msg: 'ERROR: no se ha podido conectar a la base de datos: MongoDB',
            error
        };
        
    };

}; //!FUNC-CONNECTION


module.exports = connection;