const mongoose = require('mongoose');

const blogEntrySchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    text: {
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
    },
    tags: [{
        type: String,
        validator: [function(tags) {
            return tags.length >= 3;
        }, 'NOT_ENOUGH_TAGS']
    }],
    published: {
        type: Boolean,
        default: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
    }, 
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    }
});

blogEntrySchema.pre('save', async function (next) {
    
    if (this.isModified('published')) {
        if (this.published) {
            this.date = new Date();
        }
    }

    next();
});

const BlogEntry = mongoose.model('BlogEntry', blogEntrySchema);

module.exports = BlogEntry;