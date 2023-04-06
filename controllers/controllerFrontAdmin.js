const fetchingData = require('../helpers/fetch');
const fs = require('fs').promises;


const getEntries = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/?limit=20`;

    try {

        const {ok, response} = await fetchingData(url);

        if(ok){

            res.render('../views/admin/dashboard-admin.ejs', {
                entries: response.entries.docs
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

    req.body.photo = `${process.env.URL_BASE_MULTER}/${req.file.filename}`; // url del input file (image)

    const url = `${process.env.URL_BASE_API_ENTRIES}/`;
    const method = 'POST';
    const body = req.body;

    try {

        await fetchingData(url, method, body);
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/dashboard-admin');

}; //!FUNC-ADDENTRY


const formUpdateEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`; // solo necesito el id para completar la url

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

    // variables
    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`; // solo necesito el id para completar la url
    const method = 'PUT';
    const body = req.body;

    let image = req.body.photo.split('/'); // separo la url de la propiedad 'photo'
    image = image[image.length-1]; // guardo en la variable solo el nombre de la imagen

    try {

        if(req.file != undefined){
            await fs.unlink(`./public/images/${image}`); // elimina la imagen anterior
            req.body.photo = `${process.env.URL_BASE_MULTER}/${req.file.filename}`; // guarda la imagen nueva
        } else {
            req.body.photo; // si no hay cambios, se mantiene la url de la imagen que ya está guardada en MongoDB (propiedad 'photo')
        };

        await fetchingData(url, method, body);
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/dashboard-admin');

}; //!FUNC-UPDATEENTRY


const deleteEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`;
    const method = 'DELETE';

    try {
        
        const { response } = await fetchingData(url, method);

        let image = response.entry.photo.split('/'); // separo la url de la propiedad 'photo'
        image = image[image.length-1]; // guardo en la variable solo el nombre de la imagen
        await fs.unlink(`./public/images/${image}`); // eliminar imagen de la carpeta

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