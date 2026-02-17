const express = require('express');
const env = require('dotenv');

env.config();    

const app = express();
const port = process.env.PORT || 3000;  
app.use (express.json());

letbooks = [
  { id: 1, title: 'Michael Kent', author: 'Kent M' },
  { id: 2, title: 'Tom Duncan', author: 'Duncan' },
  { id: 3, title: 'Roger Muncaster', author: 'Roger' }
];
  
let netid = 4;
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    if(!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }
    const newBook = {
        id: netid++,
        title,
        author
    };
    books.push(newBook);
    res.status(201).json({ message: 'Book added successfully', book: newBook });
});


// GET all books
// get books by id

app.get('/', (req, res) => {
  res.json({ message: 'WELCOME TO MY PARADISE' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});