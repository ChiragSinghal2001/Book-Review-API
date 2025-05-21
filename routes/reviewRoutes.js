const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

// Authenticated routes for editing/deleting your own review
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;
