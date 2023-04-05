const { Schema, model } = require('mongoose');


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
        type: String, // url
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

}, {

    timestamps: true, // mongoose añade dos propiedades de tipo Date al Schema: "createdAt", fecha de creación del documento; "updateAt", fecha de la última act. del documento

});


module.exports = model('Entry', entrySchema);