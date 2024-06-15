import mongoose from "mongoose";
const { Schema } = mongoose;

const anuntSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    titlu: {
      type: String,
      required: true,
    },
    subTitlu: {
      type: String,
      required: false,
    },
    miniDescriere: {
      type: String,
      required: false,
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
      required: false,
    },
    coperta: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      required: false,
    },
    totalRating: {
      type: Number,
      required: false,
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
