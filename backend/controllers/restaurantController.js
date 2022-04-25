import asyncHandler from 'express-async-handler'; // asyncHandler is a middleware that is used to wrap async functions
import Restaurant from '../model/restaurantModel.js';

// @desc    Fetch all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find();
  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants,
  });
});

// @desc    Fetch single restaurant
// @route   GET /api/restaurants/:id
// @access  Public
const getRestaurantById = asyncHandler(async (req, res) => {
  // CastError -> The problem is that its not a valid _id string.
  // It has to be either 12 byte binary string, or a 24 hex byte string.
  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404);
    throw new Error('Restaurant not found');
  }
});

// @desc    Delete a restaurant
// @route   DELETE /api/restaurants/:id
// @access  Private/Owner
const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    await restaurant.remove();
    res.json({ message: 'Restaurant removed' });
  } else {
    res.status(404);
    throw new Error('Restaurant not found');
  }
});

// @desc    Create a restaurant
// @route   POST /api/restaurants
// @access  Private/Owner
const createRestaurant = asyncHandler(async (req, res) => {
  const restaurant = new Restaurant({
    name: 'Sample name',
    address: 'Sample address',
    user: req.user._id,
    image_url: '/images/sample.jpg',
    is_closed: false,
    stats: {
      numReviews: 0,
      rating: 0,
      likes: 0,
    },
  });

  const createdRestaurant = await restaurant.save();
  res.status(201).json(createdRestaurant);
});

// @desc    Update a restaurant
// @route   PUT /api/restaurants/:id
// @access  Private/Owner
const updateRestaurant = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    restaurant.name = name;
    restaurant.price = price;
    restaurant.description = description;
    restaurant.image = image;
    restaurant.brand = brand;
    restaurant.category = category;
    restaurant.countInStock = countInStock;

    const updatedRestaurant = await restaurant.save();
    res.json(updatedRestaurant);
  } else {
    res.status(404);
    throw new Error('Restaurant not found');
  }
});

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

// @desc    Get top rated restaurants
// @route   GET /api/restaurants/top
// @access  Public
const getTopRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(restaurants);
});

export {
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant,
  createRestaurantReview,
  getTopRestaurants,
};
