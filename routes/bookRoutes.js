const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createBook,
  getBooks,
  getBookById,
  searchBooks
} = require('../controllers/bookController');
const { addReview } = require('../controllers/reviewController');

// Protected route to add a book
router.post('/', auth, createBook);

// Public route to get books (with pagination and filtering)
router.get('/', getBooks);

// Public route to get book details including reviews and avg rating
router.get('/:id', getBookById);

// Public search endpoint
router.get('/search/query', searchBooks);

// Authenticated route to post a review for a book
router.post('/:id/reviews', auth, addReview);

module.exports = router;
