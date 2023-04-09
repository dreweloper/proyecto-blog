const jwt = require('jsonwebtoken');


const generateJWT = (uid, name) => {

    let payload = { uid, name };

    try {
        
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        if(token) return token;

        else throw('ERROR: no se ha generado el token.')

    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-GENERATEJWT


module.exports = generateJWT;