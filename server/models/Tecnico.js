import mongoose from "mongoose";

const tecnicoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    identificacion: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Tecnico = mongoose.model("Tecnico", tecnicoSchema);

export default Tecnico;
