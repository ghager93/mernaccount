import express from 'express';
import connectDB from './core/db.js';
import bodyParser from 'body-parser';

import books from './core/api/books/route.js';
import credentials from './core/api/credentials/route.js';
import login from './core/api/login/route.js';

const app = express();

app.use(bodyParser.json())

connectDB();

app.get('/', (req, res) => res.send('Hello world!!'));
app.use('/books', books);
app.use('/creds', credentials);
app.use('/login', login);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));