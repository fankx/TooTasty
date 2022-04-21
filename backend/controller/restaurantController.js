import asyncHandler from 'express-async-handler'; // asyncHandler is a middleware that is used to wrap async functions
import Restaurant from '../model/restaurantModel';

// @desc    Fetch all restaurants
// @route   GET /api/restaurants
// @access  Public
const getAllRestaurants = asyncHandler(async (req, res) => {
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
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});
