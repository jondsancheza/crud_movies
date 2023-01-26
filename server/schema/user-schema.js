import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  id: Number,
  title: String,
  year: Number,
  time: Number,
  language: String,
  release: Date,
  country: String,
});

const movie = mongoose.model('movie', movieSchema);

export default movie;