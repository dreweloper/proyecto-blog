const fetchingData = require('../helpers/fetch');
const fs = require('fs').promises;

/**
 * Obtiene todas las entradas de la bbdd y las renderiza en la vista 'dashboard-admin'.
 * @function getEntries
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta
 */
const getEntries = async (req, res) => {

    const page = req.query.page || 1;

    const url = `${process.env.URL_BASE_API_ENTRIES}/?page=${page}&limit=5`; //! modificar el query "limit" cuando cambie las cards por la tabla

    try {

        const { ok, response } = await fetchingData(url);

        if(ok){

            res.render('../views/admin/dashboard-admin.ejs', {
                entries: response.entries.docs,
                pagination: response.entries
            });

        };
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-GETENTRIES

/**
 * Renderiza la vista del formulario para crear una entrada nueva.
 * @function formAddEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta 
 */
const formAddEntry = async (req, res) => {

    res.render('../views/admin/form-new.ejs');

}; //!FUNC-FORMADDENTRY

/**
 * Crea una entrada y redirige a la vista 'dashboard-admin'.
 * @function addEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta 
 */
const addEntry = async (req, res) => {

    req.body.photo = `${process.env.URL_BASE_MULTER}/${req.file.filename}`; // asigno la url del input file (image) a la propiedad "photo" del entrySchema

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

/**
 * Renderiza la vista del formulario para editar entradas mostrando los valores de las propiedades que ya existen en la bbdd capturando el 'id' a través del params.
 * @function formUpdateEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta 
 */
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

/**
 * Actualiza una entrada y redirige a la vista 'dashboard-admin'.
 * @function updateEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta  
 */
const updateEntry = async (req, res) => {

    // variables
    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`;
    const method = 'PUT';
    const body = req.body;

    let image = req.body.photo.split('/'); // separa la url de la propiedad "photo"
    image = image[image.length - 1]; // guarda en la variable solo el nombre de la imagen

    try {

        if(req.file != undefined){

            await fs.unlink(`./public/images/${image}`); // elimina la imagen anterior de la carpeta images

            req.body.photo = `${process.env.URL_BASE_MULTER}/${req.file.filename}`; // guarda la url de la imagen nueva

        } else {

            req.body.photo; // si no hay cambios, se mantiene la url de la imagen que ya está guardada en MongoDB (propiedad "photo")

        };

        await fetchingData(url, method, body);
        
    } catch (error) {

        console.log(error);
        
    };

    res.redirect('/dashboard-admin');

}; //!FUNC-UPDATEENTRY

/**
 * Elimina una entrada capturando el 'id' a través del params y redirige a la vista 'dashboard-admin'.
 * @function deleteEntry
 * @async
 * @param {Object} req Objeto de solicitud
 * @param {Object} res Objeto de respuesta  
 */
const deleteEntry = async (req, res) => {

    const url = `${process.env.URL_BASE_API_ENTRIES}/${req.params.id}`;
    const method = 'DELETE';

    try {
        
        const { response } = await fetchingData(url, method);

        let image = response.entry.photo.split('/'); // separa la url de la propiedad "photo"
        image = image[image.length - 1]; // guarda en la variable solo el nombre de la imagen

        await fs.unlink(`./public/images/${image}`); // elimina la imagen de la carpeta "images"

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