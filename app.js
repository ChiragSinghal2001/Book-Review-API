const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('📚 Book Review API is running');
  });
  
app.use('/', authRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/search', bookRoutes);

app.use(errorHandler);

module.exports = app;
