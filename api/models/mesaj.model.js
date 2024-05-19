import mongoose from "mongoose";
const { Schema } = mongoose;

const mesajSchema = new Schema(
  {
    chatID: {
      type: String,
      required: true,
      unique: true,
    },
    mesajID: {
      type: String,
      required: true,
    },
    textMsj: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Mesaj', mesajSchema)