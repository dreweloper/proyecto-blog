const jwt = require('jsonwebtoken');

/**
 * Crear el token tanto en el login como en el registro de usuarios.
 * @function
 * @param {Object} uid ID del usuario
 * @param {String} name Nombre del usuario
 * @returns {String} Token
 * @throws Mensaje de error
 */

const generateJWT = (uid, name) => {

    let payload = { uid, name };

    try {
        
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        if(token) return token;

        else throw('ERROR: no se ha generado el token.');

    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-GENERATEJWT


module.exports = generateJWT;