const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// 3) ROUTES
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

// router.route('/:id').get(authController.protect, reviewController.getTour);

module.exports = router;
