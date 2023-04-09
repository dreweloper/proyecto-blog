const { validationResult } = require('express-validator');


const validateInputs = (req, res, next) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){

        console.log('ERRORS:', errores.array()[0].msg);

        return res
            .status(400)
            .render(
                'login', {
                    ok: false,
                    error: errores.array(),
                    token: req.cookies.token || ''
            });

    };

    next();

}; //!FUNC-VALIDATEINPUTS


module.exports = validateInputs;