import mongoose from "mongoose";
const { Schema } = mongoose;

const chatSchema = new Schema(
  {
    chatID: {
      type: String,
      required: true,
      unique: true,
    },
    vanzatorID: {
      type: String,
      required: true,
    },
    cumparatorID: {
      type: String,
      required: true,
    },
    ultimulMsg: {
      type: String,
      required: false,
    },
    seenVanzator: {
      type: String,
      required: true,
    },
    seenCumparator: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Chat', chatSchema)