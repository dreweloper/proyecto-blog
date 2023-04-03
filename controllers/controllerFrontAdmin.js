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

    const url = '';
    const method = 'POST';
    req.body.photo = `${process.env.URL_BASE_MULTER}/${req.file.filename}`; // url del input file (image)
    const body = req.body;

    console.log('BODY:', req.body);

    try {

        await fetchingData(url, method, body);
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/dashboard-admin');

}; //!FUNC-ADDENTRY


const formUpdateEntry = async (req, res) => {

    const url = req.params.id; // solo necesito el id para completar la url

    try {

        const {response} = await fetchingData(url)

        res.render('../views/admin/form-edit.ejs', {
            entry: response.entry
        });
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-FORMUPDATEENTRY


const updateEntry = async (req, res) => {

    const url = req.params.id;
    const method = 'PUT';
    const body = req.body;

    try {

        await fetchingData(url, method, body);
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/dashboard-admin');

}; //!FUNC-UPDATEENTRY


const deleteEntry = async (req, res) => {

    const url = req.params.id;
    const method = 'DELETE';

    try {
        
        await fetchingData(url, method);

    } catch (error) {
        
        console.log(error);

    };

    res.redirect('/dashboard-admin')

}; //!FUNC-DELETEENTRY


module.exports = {
    getEntries,
    formAddEntry,
    addEntry,
    formUpdateEntry,
    updateEntry,
    deleteEntry
};