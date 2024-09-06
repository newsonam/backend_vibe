const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});



const Emp = mongoose.model('Employee Data', empSchema);

module.exports = Emp
