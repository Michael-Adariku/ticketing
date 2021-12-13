const mongoose = require('mongoose');
const regNumber = new mongoose.Schema({
    userCard: {
        PIN: {
            type: String,
            require: false
        },
        serial: {
            type: String,
            require: false
        }

    },
    date: {
        type: Date,
        default: Date.now
    }
});

const PIN = mongoose.model('PIN', regNumber);

module.exports = PIN;