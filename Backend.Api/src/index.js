const express = require('express');
const cors = require('cors');
require('./db/mongodb');
const userRouter = require('./router/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://timsigl.de'
}));
app.use(express.json());
app.use(userRouter);

app.listen(port, () => console.log('Server is running on port ' + port));