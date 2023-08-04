const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

function dateFormat(timestamp) {
    return format(timestamp, 'MM-dd-yyyy');
}

const CommentSchema = new Schema ({
    commentText: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 420,
        trim: true,
    },
    commentAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    commentDate: {
        type: Date,
        default: Date.now,
        get: dateFormat,
    },
    commentLikes: {
        type: Number,
        default: 0,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Chrrp'
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;

            









