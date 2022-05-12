const mongoose = require('mongoose');

const statesSchema = mongoose.Schema({
    stateCode: {
        type: String,
        required: true,
        unique: true,
        code: String
    },

    funFacts: [{
        type: String
    }]
});