import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './config/Database.js';
import EmployeeRoute from './routes/EmployeeRoute.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(EmployeeRoute);

app.listen(5000, () => console.log('Server up and running...'));
