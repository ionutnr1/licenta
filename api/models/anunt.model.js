import mongoose from "mongoose";
const { Schema } = mongoose;

const anuntSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    titlu: {
      type: String,
      required: true,
    },
    subTitlu: {
      type: String,
      required: true,
    },
    miniDescriere: {
      type: String,
      required: true,
    },
    timpEstimat: {
      type: String,
      required: true,
    },
    descriere: {
      type: String,
      required: true,
    },
    imagini: {
      type: [String],
      required: true,
    },
    coperta: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      required: true,
    },
    totalRating: {
      type: Number,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    pret: {
      type: String,
      required: true,
    },
    vanzari: {
      type: Number,
      default: 0, 
    },
    beneficii: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Anunt", anuntSchema);
