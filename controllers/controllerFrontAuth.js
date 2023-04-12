const fetchingData = require('../helpers/fetch');

/**
 * Si no hay token en las cookies, renderiza la vista 'login' con el formulario.
 * @function formLogin
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @returns Si hay token en las cookies, redirige al '/dashboard-admin'
 */

const formLogin = async (req, res) => {

    if(req.cookies.token != undefined){

        return res.redirect('/dashboard-admin');

    };

    res.render('login', {
        token: req.cookies.token || '',
        error: [] // si no, da error porque el middleware 'validateResult' no le ha enviado nada al renderizar el ejs
    });

}; //!FUNC-FORMLOGIN

/**
 * Verifica si
 * @function checkAuth
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 * @returns Si 
 */

const checkAuth = async (req, res) => {

    let url = `${process.env.URL_BASE_API_USERS}/auth`;
    let method = 'POST';
    let body = req.body;

    try {

        const auth = await fetchingData(url, method, body);

        if(!auth){
            
            res.redirect('/login'); //! cambiar por un render ('login') y pinto el msg de error: 'E-mail o password incorrecto.'

        } else {

            const { response } = auth;

            res.cookie('token', response.token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 60 * 5000
            });

            res.redirect('/dashboard-admin');

        };
        
    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-CHECKAUTH


const logoutUser = async (req, res) => {

    res.clearCookie('token').redirect('/');

}; //!FUNC-LOGOUTUSER


module.exports = {
    formLogin,
    checkAuth,
    logoutUser
};