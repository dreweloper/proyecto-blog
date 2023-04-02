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
    timestamps: true

});


module.exports = model('Entry', entrySchema);

// If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated