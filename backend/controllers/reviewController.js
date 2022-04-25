// @desc    Create a new review
// @route   POST /api/restaurants/:id/reviews
// @access  Private
const createRestaurantReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    const alreadyReviewed = restaurant.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('You have already reviewed this restaurant');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment: comment,
      user: req.user._id,
    };

    restaurant.reviews.push(review);

    restaurant.numReviews = restaurant.reviews.length;
    restaurant.rating =
      restaurant.reviews.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0) / restaurant.reviews.length;

    const updatedRestaurant = await restaurant.save();
    res.status(201).json({ message: 'Review created' });
  } else {
    res.status(404);
    throw new Error('Restaurant not found');
  }
});
