const Entry = require('../models/modelEntry');


const getEntries = async (req, res) => {

    // variables
    const search = new RegExp(`${req.query.search}`, 'i'); // creo una expresión regular a partir de la string recibida en req.body y se la paso como valor al primer 'find()'

    const page = req.query.page || 1; // si 'req.query.page' es 'undefined', establezco por defecto que siempre empiece en la página 1
    const limit = req.query.limit || 3; // si 'req.query.limit' es 'undefined', establezco por defecto en 3 el límite de documentos por página

    // try/catch mongoose
    try {

        if(req.query.search != undefined){ // si la propiedad "search" existe en el objeto "req.query", buscará en MongoDB según su valor (de "search"); en caso contrario, entra en el 'else'

            const entries = await Entry.paginate( // utilizo el método 'paginate()' (funciona igual que el 'find()') del módulo 'mongoose-paginate-v2' para la paginación automática
                { $or: [ { title: search }, { extract: search }, { body: search } ] }, // si lo que busca ("search") lo encuentra en "title", "extract" o "body", lo devuelve (return)
                { limit, page } // 'options' del método 'paginate' donde indico los valores (const limit, page) de las propiedades "limit" y "page"
            );

            console.log('ENTRIES - IF (BACK CONTROLLER):', entries);

            return res.status(200).json({
                ok: true,
                entries
            });

        } else {

            const entries = await Entry.paginate( {}, { limit, page } ); 

            return res.status(200).json({
                ok: true,
                entries
            });

        };

    } catch (error) {

        console.log(`getEntries controller error: ${error}`);
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
        
    };

}; //!FUNC-GETENTRIES


const getEntry = async (req, res) => {

    const id = req.params.id;

    try {
        
        const entry = await Entry.findById(id);

            return res.status(200).json({
                ok: true,
                entry
            });

    } catch (error) {
        
        console.log(`getEntry controller error: ${error.name}. ${error.message}`);

        return res.status(500).json({
            ok: false,
            error
        });

    };

}; //!FUNC-GETENTRY


const addEntry = async (req, res) => { // pendiente: manejo de errores

    const newEntry = new Entry(req.body);

    try {

        const entry = await newEntry.save();

            return res.status(201).json({
                ok: true,
                msg: 'Entrada guardada con éxito.',
                entry
            });
        
    } catch (error) {

        console.log(`addEntry controller error: ${error.name}. ${error.message}`);

        return res.status(500).json({
            ok: false,
            error
        });
        
    };

}; //!FUNC-ADDENTRY


const updateEntry = async (req, res) => { // pendiente: manejo de errores

    const id = req.params.id;
    const body = req.body;

    try {
        
        const entry = await Entry.findByIdAndUpdate(id, body, {new: true});

        return res.status(200).json({
            ok: true,
            msg: 'Entrada actualizada correctamente.',
            entry
        });

    } catch (error) {
        
        console.log(`updateEntry controller error: ${error.name}. ${error.message}`);

        return res.status(500).json({
            ok: false,
            error
        });

    };

}; //!FUNC-UPDATEENTRY


const deleteEntry = async (req, res) => { // pendiente: manejo de errores

    const id = req.params.id;

    try {
        
        const entry = await Entry.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'La entrada se ha eliminado correctamente.',
            entry
        });

    } catch (error) {

        console.log(`deleteEntry controller error: ${error.name}. ${error.message}`);
        
        return res.status(500).json({
            ok: false,
            error
        });

    };

}; //!FUNC-DELETEENTRY


module.exports = {
    getEntries,
    getEntry,
    addEntry,
    updateEntry,
    deleteEntry,
};