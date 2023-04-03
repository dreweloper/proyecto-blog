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
        
        const entry = await fetchingData(url);

        console.log(entry);

    } catch (error) {
        
        console.log(error);

    };

}; //!FUNC-GETENTRY


module.exports = {
    getEntries,
    getEntry
};