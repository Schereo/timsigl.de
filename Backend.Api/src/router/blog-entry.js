const express = require('express');
const BlogEntry = require('../models/blog-entry');
const auth = require('../middleware/auth');
const router = new express.Router();
const mongoose = require('mongoose');

router.post('/article', auth, async (req, res) => {

    const blogEntry = new BlogEntry({
        heading: req.body.heading,
        summary: req.body.summary,
        text: req.body.text,
        tags: req.body.tags,
        published: req.body.published,
        url: req.body.url,
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
        const articles = await BlogEntry.find({}).populate('creator');       
        res.send(articles);
    } catch (e) {
        res.status(400).send();
    }
});

router.get('/articles/me', auth, async (req, res) => {
    try {
        const articles = await BlogEntry.find({creator: mongoose.Types.ObjectId(req.user._id)}).populate('creator');
        res.send(articles);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;