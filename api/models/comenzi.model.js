import mongoose from "mongoose";
const { Schema } = mongoose;

const comenziSchema = new Schema(
  {
    anuntID: {
      type: String,
      required: true,
    },
    vanzatorID: {
      type: String,
      required: true,
    },
    titlu: {
      type: String,
      required: true,
    },
    pret: {
      type: Number,
      required: true,
    },
    imagini: {
      type: String,
      required: false,
    },
    cumparatorID: {
      type: String,
      required: true,
    },
    finalizata: {
      type: Boolean,
      default: false,
    },
    plata: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("comenzi", comenziSchema);
