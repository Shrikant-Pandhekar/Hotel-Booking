import mongoose from "mongoose";
import { v4 } from "uuid";
v4();

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 150,
    trim: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotels", HotelSchema);
