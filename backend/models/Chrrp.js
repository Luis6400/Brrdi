const { Schema, model } = require('mongoose');

const chrrpSchema = new Schema({
    chrrpText: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 420,
        trim: true,
    },
    chrrpAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    chrrpDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    chrrpLikes: {
        type: Number,
        default: 0,
    },
    chrrpRechrrps: {
        type: Number,
        default: 0,
    },
});

const Chrrp = model('Chrrp', chrrpSchema);

module.exports = Chrrp;
