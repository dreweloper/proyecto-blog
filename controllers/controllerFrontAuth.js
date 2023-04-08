const fetchingData = require('../helpers/fetch');


const formLogin = async (req, res) => {

    if(req.cookies.token != undefined){

        return res.redirect('/dashboard-admin');

    };

    res.render('login');

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
                maxAge: 60*5000
            });

            return res.redirect('/dashboard-admin');

        };
        
    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-VERIFYLOGIN


const logoutUser = async (req, res) => {

    console.log('ENTRO EN LOGOUTUSER')

    res.clearCookie('token');
    res.redirect('/');

}; //!FUNC-LOGOUTUSER


module.exports = {
    formLogin,
    checkAuth,
    logoutUser
};