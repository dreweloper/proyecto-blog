const Entry = require('../models/modelEntry');


const getEntries = async (req, res) => {

    const search = new RegExp(`${req.query.search}`, 'i'); // creo una expresión regular a partir de la string recibida en req.body y se la paso como valor al primer 'find()'
    console.log('BACK:', req.body, req.params, req.query);

    try {

        if(Object.keys(req.query).length != 0){ // si req.body (object) no está vacío, buscará en MongoDB según el valor del search; en caso contrario, entra en el 'else'
            console.log('ENTRO EN EL IF');
            const entries = await Entry.find( { $or: [ { title: search }, { body: search } ] } ); // si lo que busca (search) lo encuentra (find()) en 'title' o en 'body', lo devuelve (return)

            return res.status(200).json({
                ok: true,
                total: entries.length,
                entries
            });

        } else {
            console.log('ENTRO EN EL ELSE');
            const entries = await Entry.find();

            return res.status(200).json({
                ok: true,
                total: entries.length,
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