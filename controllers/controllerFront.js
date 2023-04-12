const fetchingData = require('../helpers/fetch');

/**
 * Obtiene todas las entradas de la bbdd.
 * @function getEntries
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 */

const getEntries = async (req, res) => {

    const page = req.query.page || 1;
    
    const url = `${process.env.URL_BASE_API_ENTRIES}/?page=${page}`;

    try {

        const { response } = await fetchingData(url);

        res.render('index', {
            entries: response.entries.docs,
            pagination: response.entries,
            token: req.cookies.token || ''
        });
        
    } catch (error) {

        console.log(error);
        
    };
    
}; //!FUNC-GETENTRIES

/**
 * Obtiene una entrada de la bbdd según el valor de la query 'id'.
 * @function getEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 */

const getEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`;

    try {
        
        const { ok, response } = await fetchingData(url);

        if(ok){

            res.render('entry.ejs', {
                entry: response.entry,
                token: req.cookies.token || ''
            });

        };

    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-GETENTRY

/**
 * Obtiene las entradas de la bbdd según el valor de la query 'search'.
 * @function searchEntries
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 */

const searchEntries = async (req, res) => {

    const page = req.query.page || 1;

    const url = `${process.env.URL_BASE_API_ENTRIES}/?search=${req.query.search}&page=${page}`; // "obligo" al fetch() a que entre por el 'if' del controller getEntries del back
    
    try {

        if(req.query.search != ''){ // solución temporal hasta que aplique el check (express-validator) al input del buscador

            const { response } = await fetchingData(url);

            res.render('result', {
                entries: response.entries.docs,
                search: req.query.search,
                token: req.cookies.token || '',
                pagination: response.entries
            });

        } else {

            res.redirect('/'); // solución temporal hasta que aplique el check (express-validator) al input del buscador

        };
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-SEARCHENTRIES


module.exports = {
    getEntries,
    getEntry,
    searchEntries
};