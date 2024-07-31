const mongoose = require('mongoose');

const tenderSchema = mongoose.Schema({
    tenderName: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }, // e.g., open, closed, awarded
    bufferTime: {
        type: String,
        required: true
    },
});



const Tender = mongoose.model('Tender', tenderSchema);

module.exports = Tender
