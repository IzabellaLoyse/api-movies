import { model, Schema } from 'mongoose';

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    stars: {
      type: Array,
    },
    poster: {
      type: String,
    },
  },

  {
    timestamps: true,
  },
);

export const MovieModel = model('Movie', MovieSchema);
