const jwt = require('jsonwebtoken');


const verifyJWT = async (req, res, next) => {

    //const token = req.header('x-token'); //* 'x-token' es un convencionalismo

    if(!token){
        return res.status(401).json({ //* 401 porque no está autorizado
            ok: false,
            msg: 'ERROR: no hay token en la petición.'
        });
    };

    try {

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY); //* método verify de jwt que require como primer argumento el token y como segundo la firma (la variable de entorno ya creada)

        req.uid = payload.uid //* se lo pasamos anteriormente al jwt (?)
        req.usuario = payload.usuario;
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el token no es válido.'
        });

    }

    next();

};


module.exports = verifyJWT;