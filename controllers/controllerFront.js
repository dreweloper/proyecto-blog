const fetchingData = require('../helpers/fetch');


const getEntries = async (req, res) => {
    
    const url = `${process.env.URL_BASE_API}/`;

    try {

        const {ok, response} = await fetchingData(url);

        if(ok){

            res.render('index', {
                entries: response.entries
            });

        };
        
    } catch (error) {

        console.log(error);
        
    };
    
}; //!FUNC-GETENTRIES


const getEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API}/${req.params.id}`;

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

    const url = `${process.env.URL_BASE_API}/?search=${req.query.search}`; // "obligo" al fetch a que entre por el 'if' del controller getEntries del back (Object.keys(req.query).length != 0)
    console.log('FRONT:', req.body, req.params, req.query)
    
    try {

        const { response } = await fetchingData(url);

        const {total, entries} = response;

        res.render('results', {
            total,
            entries
        });
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-SEARCHENTRIES


const showResult = async (req, res) => {

    res.render('results');

}; //!FUNC-SHOWRESULT


module.exports = {
    getEntries,
    getEntry,
    searchEntries,
    showResult
};