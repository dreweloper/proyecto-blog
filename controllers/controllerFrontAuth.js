const fetchingData = require('../helpers/fetch');


const formLogin = async (req, res) => {

    if(req.cookies.token != undefined){

        return res.redirect('/dashboard-admin');

    };

    res.render('login', {
        token: req.cookies.token || '',
        error: [] // si no, da error porque el middleware 'validateResult' no le ha enviado nada al renderizar el ejs
    });

}; //!FUNC-FORMLOGIN


const checkAuth = async (req, res) => {

    let url = `${process.env.URL_BASE_API_USERS}/auth`;
    let method = 'POST';
    let body = req.body;

    try {

        const auth = await fetchingData(url, method, body);

        if(!auth){
            
            res.redirect('/login');

        } else {

            const { response } = auth;

            res.cookie('token', response.token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 60 * 5000
            });

            return res.redirect('/dashboard-admin');

        };
        
    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-CHECKAUTH


const logoutUser = async (req, res) => {

    res.clearCookie('token');
    res.redirect('/');

}; //!FUNC-LOGOUTUSER


module.exports = {
    formLogin,
    checkAuth,
    logoutUser
};