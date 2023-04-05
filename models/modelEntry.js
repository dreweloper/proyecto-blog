const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const entrySchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    extract: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String, // url (http://localhost:3000/images/…)
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

}, {

    timestamps: true, // mongoose añade dos propiedades de tipo Date al Schema: "createdAt", fecha de creación del documento; "updateAt", fecha de la última act. del documento

});


entrySchema.plugin(mongoosePaginate); // agrego el plugin de la paginación (módulo 'mongoose-paginate-v2') al entrySchema


module.exports = model('Entry', entrySchema);