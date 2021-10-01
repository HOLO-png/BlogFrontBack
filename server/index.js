import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import { connect } from './config/db/index.js';

const app = express();
const PORT = process.env.port || 5000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

// connect db
connect();

// url
app.use('/posts', posts)

// listen port
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})