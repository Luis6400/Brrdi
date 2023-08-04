const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

function dateFormat(timestamp) {
    return format(timestamp, 'MM-dd-yyyy');
}

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
        get: dateFormat,
    },
    chrrpLikes: {
        type: Number,
        default: 0,
    },
    chrrpRechrrps: {
        type: Number,
        default: 0,
    },
    parentChrrp: {
        type: Schema.Types.ObjectId,
        ref: 'Chrrp',
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const Chrrp = model('Chrrp', chrrpSchema);

module.exports = Chrrp;
