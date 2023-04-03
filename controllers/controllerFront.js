const fetchingData = require('../helpers/fetch');


const getEntries = async (req, res) => {

    try {

        const {ok, response} = await fetchingData();

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

    const id = req.params.id;
    const url = ''

    try {
        
        const entry = await fetchingData

    } catch (error) {
        


    };

}; //!FUNC-GETENTRY


module.exports = {
    getEntries,
    getEntry
};