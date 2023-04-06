const fetchingData = require('../helpers/fetch');


const getEntries = async (req, res) => {
    
    const url = `${process.env.URL_BASE_API_ENTRIES}/?page=${req.query.page}`; // pasándole el valor de 'req.query.page' avanza o retrocede, según lo que reciba, en la paginación de MongoDB

    try {

        const { response } = await fetchingData(url);

        res.render('index', {
            entries: response.entries.docs
        });
        
    } catch (error) {

        console.log(error);
        
    };
    
}; //!FUNC-GETENTRIES


const getEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`;

    try {
        
        const {ok, response} = await fetchingData(url);

        if(ok){

            res.render('entry.ejs', {
                entry: response.entry
            });

        };

    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-GETENTRY


const searchEntries = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/?search=${req.query.search}`; // "obligo" al fetch a que entre por el 'if' del controller getEntries del back (Object.keys(req.query).length != 0)
    
    try {

        if(req.query.search != ''){ // solución temporal hasta que aplique el check (express-validator) al input del buscador

            const { response } = await fetchingData(url);

            console.log('SEARCH FRONT:', response.entries);

            res.render('result', {
                entries: response.entries.docs,
                search: req.query.search
            });

        } else {

            res.redirect('/'); // solución temporal hasta que aplique el check (express-validator) al input del buscador

        };
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-SEARCHENTRIES


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
                secure: true,
                sameSite: 'strict',
                expires: new Date('2023-12-31')
            });

            return res.redirect('/dashboard-admin');

        };
        
    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-VERIFYLOGIN


module.exports = {
    getEntries,
    getEntry,
    searchEntries,
    formLogin,
    checkAuth
};