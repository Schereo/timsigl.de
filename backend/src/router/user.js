const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const upload = multer({
    limits: {
        fileSize: 2000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(new Error('File must be an image'));
        }
        
        cb(undefined, true);
    }
});

router.post('/users', async (req, res) => {

    if (!req.body.privacy) {
        return res.status(400).send({
            error: "user has not agreed to privacy"
        });
    }
    delete req.body.privacy;
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/users/me', auth, async (req, res) => {
   res.send(req.user);
});

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
});

router.delete('/users/me/avatar', auth, async (req, res) => {
    try {
        req.user.avatar = undefined;
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(400).send(e);
    }    
});

router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user || !user.avatar) {
            throw new Error();
        }

        res.set('Content-Type', 'image/jpg');
        res.send(user.avatar);
    } catch (e) {
        res.status(404).send();
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/autologin', async(req, res) => {
    
    try {
        const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': req.body.token });
        if (!user) {
            throw new Error();
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(401).send({ error: 'Not authenticated', e});
    }
    
});

router.get('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/users/:id', auth, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
});

router.patch('/users/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);

    try {
        const user  = await User.findById(req.params.id);
        updates.forEach((update) => {
            user[update] = req.body[update];
        });

        await user.save();

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/users/:id', auth, async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/users/role', auth, async (req, res) => {

    if (req.user.role !== 'admin') {
        return res.status(401).send({"error": "ROLE_TO_LOW"});
    }
    
    try {
        const user = await User.findOneAndUpdate({ email: req.body.email }, { role: req.body.role }, { returnNewDocument: true});

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;