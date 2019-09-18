const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.get('', cors(), (req, res) => {
    res.send({
        name: 'Tim',
        age: 22
    });
});

app.listen(port, () => console.log('Server is running on port' + port));