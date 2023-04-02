// pendiente importar fetch


const getEntries = async (req, res) => {

    res.render('../views/admin/dashboard-admin.ejs');

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