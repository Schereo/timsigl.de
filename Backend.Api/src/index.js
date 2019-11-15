const express = require('express');
const cors = require('cors');
require('./db/mongodb');
const userRouter = require('./router/user');
const blogEntryRouter = require('./router/blog-entry');
const mailRouter = require('./router/mail');

const app = express();

const port = process.env.PORT;

app.options('*', cors());
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(blogEntryRouter);
app.use(mailRouter);

app.listen(port, () => console.log('Server is running on port ' + port));