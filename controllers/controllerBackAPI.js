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

        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });
        
    };

}; //!FUNC-GETENTRIES


const getEntry = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-GETENTRY

const addEntry = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-ADDENTRY

const updateEntry = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-UPDATEENTRY

const deleteEntry = async (req, res) => {

    res.send('Capturando la ruta');

}; //!FUNC-DELETEENTRY


module.exports = {
    getEntries,
    getEntry,
    addEntry,
    updateEntry,
    deleteEntry
};