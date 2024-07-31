const mongoose = require('mongoose');

const bidSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    bidTime: {
        type: String,
        required: true
    },
    bidCost: {
        type: Number,
        required: true
    },
    bidDate: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    tenderId: {
        type: String,
        required: true
    }
});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid 