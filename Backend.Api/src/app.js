const express = require('express');
const cors = require('cors');

const app = express();

app.get('', cors(), (req, res) => {
    res.send({
        name: 'Tim',
        age: 22
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));