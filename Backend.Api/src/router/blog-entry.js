const express = require('express');
const BlogEntry = require('../models/blog-entry');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/blogentries', auth, async (req, res) => {

    const blogEntry = new BlogEntry(req.body, req.user);
    try {       
        await blogEntry.save();
        res.status(201).send();
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/blogentries', auth, async (req, res) => {

    try {
        const blogEntries = await BlogEntry.find({});
        await blogEntries.populate('creator').execPopulate();
        res.send(blogEntries);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;