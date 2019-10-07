const mongoose = require('mongoose');

const blogEntrySchema = new mongoose.Schema({
    blocks: [{
        type: {
            type: String
        },
        data: {
            type: mongoose.SchemaTypes.Mixed
        }
    }],
    time: {
        type: Date
    },
    version: {
        type: String
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    }
});

const BlogEntry = mongoose.model('BlogEntry', blogEntrySchema);

module.exports = BlogEntry;