import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    utilizator: {
      type: String,
      required: true,
      unique: true,
    },
    parola: {
      type: String,
      required: true,
    },
    numeIntreg: {
      type: String,
      required: false,
    },
    adresa: {
      type: String,
      required: false,
    },
    imagine: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isVanzator: {
      type: Boolean,
      required: true,
      default: false,
    },
    descriere: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema)