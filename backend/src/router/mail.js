const express = require('express');
const router = new express.Router();
const sendMail = require('../services/mail.service');

router.post('/mail', async (req, res) => {
    try{
        const body = req.body;
        await sendMail(body.from, body.to, body.subject, body.text);
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
    
});

module.exports = router;