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
    }
    
});


module.exports = model('Entry', entrySchema);