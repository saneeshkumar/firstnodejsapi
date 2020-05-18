import express from 'express';
import todo from './apis/todo.js';

//set up the express app
const app = express();
app.use(todo)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});