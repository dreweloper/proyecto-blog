const { validationResult } = require('express-validator');


const validate = (req, res, next, vista) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){

        return res.status(401).render(vista, {
            ok: false,
            error: errores.array(),
            token: req.cookies.token || '', // si no, da error al intentar renderizar la vista
        });

    };

    next();

}; //!FUNC-VALIDATE


module.exports = validate;