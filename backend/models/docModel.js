const mongoose = require('mongoose');

const docSchema = mongoose.Schema({
    title : String,
    content : String,
    uploadedBy : String,
    date : {
        type : Date,
        default : Date.now
    },
    lastUpdate : {
        type : Date,
        default : Date.now
    }
})