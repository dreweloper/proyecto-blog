const fetchingData = require('../helpers/fetch');


const getEntries = async (req, res) => {
    
    const url = `${process.env.URL_BASE_API}/`;

    try {

        const {ok, response} = await fetchingData(url);

        if(ok){

            res.render('./index.ejs', {
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

            res.render('./entry.ejs', {
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

        console.log('RESPONSE:', response);

        // res.render('results', {
        //     total: response.total,
        //     entries: response.entries
        // })
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/search-result');

}; //!FUNC-SEARCHENTRIES


const showResult = async (req, res) => {

    res.render('../views/results.ejs');

}; //!FUNC-SHOWRESULT


module.exports = {
    getEntries,
    getEntry,
    searchEntries,
    showResult
};