import mongoose from "mongoose";
const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    anuntID: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    descriere: {
      type: String,
      required: true,
    },
    stele: {
      type: String,
      required: true,
      enum:[1,2,3,4,5]
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Rating', ratingSchema)