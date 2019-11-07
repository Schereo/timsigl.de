const express = require('express');
const BlogEntry = require('../models/blog-entry');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/article', auth, async (req, res) => {

    const blogEntry = new BlogEntry({
        heading: req.body.heading,
        summary: req.body.summary,
        text: req.body.text,
        tags: req.body.tags,
        creator: req.user._id
    });
    try {       
        await blogEntry.save();
        res.status(201).send();
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/articles', async (req, res) => {

    try {
        const blogEntries = await BlogEntry.find({});
        var blogEntriesWithCreator= [];
        for(var blogEntry of blogEntries) {
            const blogEntryWithCreator = await blogEntry.populate('creator').execPopulate();
            blogEntriesWithCreator.push(blogEntryWithCreator);
        }
        
        res.send(blogEntriesWithCreator);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;