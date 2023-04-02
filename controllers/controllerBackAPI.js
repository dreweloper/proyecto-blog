const Entry = require('../models/modelEntry');


const getEntries = async (req, res) => {

    try {

        const entries = await Entry.find();

        if(entries){
            return res.status(200).json({
                ok: true,
                entries
            });
        } else {
            return res.status(400).json({
                ok: false,
                msg: 'ERROR: no se ha obtenido ninguna entrada.'
            })
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
        
        await Entry.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'La entrada se ha eliminado correctamente.'
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
    addEntry,
    updateEntry,
    deleteEntry
};