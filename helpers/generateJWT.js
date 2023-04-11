const jwt = require('jsonwebtoken');

/**
 * @function
 * @param {Object} uid ID del usuario
 * @param {String} name Nombre del usuario
 * @returns {String} Token
 * @throws Mensaje de error
 */

const generateJWT = (uid, name) => {

    /**
     * @type {Object}
     */

    let payload = { uid, name };

    try {

        /**
         * @const {String} token Token generado por JWT para el login de usuario/admin
         */
        
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