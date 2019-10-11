const express = require('express');
const BlogEntry = require('../models/blog-entry');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/blogentries', auth, async (req, res) => {

    const blogEntry = new BlogEntry({
        ...req.body,
        creator: req.user._id
    });
    try {       
        await blogEntry.save();
        res.status(201).send();
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/blogentries', async (req, res) => {

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