const Review = require('../models/Review');

exports.addReview = async (req, res, next) => {
  try {
    const existing = await Review.findOne({ book: req.params.id, user: req.user.id });
    if (existing) return res.status(400).json({ message: 'Review already exists' });

    const review = new Review({
      ...req.body,
      book: req.params.id,
      user: req.user.id
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (err) {
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted' });
  } catch (err) {
    next(err);
  }
};
