const fetchingData = require('../helpers/fetch');


const getEntries = async (req, res) => {

    try {

        const {ok, response} = await fetchingData();

        if(ok){

            res.render('../views/admin/dashboard-admin.ejs', {
                entries: response.entries
            });

        };
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-GETENTRIES


const formAddEntry = async (req, res) => {

    res.render('../views/admin/form-new.ejs');

}; //!FUNC-FORMADDENTRY


const addEntry = async (req, res) => {



}; //!FUNC-ADDENTRY


const formUpdateEntry = async (req, res) => {

    res.render('../views/admin/form-edit.ejs');

}; //!FUNC-FORMUPDATEENTRY


const updateEntry = async (req, res) => {



}; //!FUNC-UPDATEENTRY


const deleteEntry = async (req, res) => {



}; //!FUNC-DELETEENTRY


module.exports = {
    getEntries,
    formAddEntry,
    addEntry,
    formUpdateEntry,
    updateEntry,
    deleteEntry
};