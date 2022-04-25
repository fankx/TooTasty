import mongoose from 'mongoose';
import { reviewSchema } from './reviewModel.js';

const restaurantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    is_closed: { type: Boolean, required: true },
    reviews: [reviewSchema],
    stats: {
      rating: { type: Number, required: true, default: 0 },
      numReviews: {
        type: Number,
        default: 0,
      },
      likes: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
