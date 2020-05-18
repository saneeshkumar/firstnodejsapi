import express from 'express';
import bodyParser from 'body-parser';
import todosRoute from './routes/todos-route.js';

//set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(todosRoute)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});