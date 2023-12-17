import mongoose from "mongoose";

const reporteSchema = new mongoose.Schema(
  {
    ccEst: {
      type: String,
      required: true,
      trim: true,
    },
    sede: {
      type: String,
      required: true,
      trim: true,
    },
    salon: {
      type: String,
      required: true,
      trim: true,
    },
    numeroComputador: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    estado: {
      type: Boolean,
      default: false,
    },
    tecnico: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tecnico",
    },
  },
  { timestamps: true }
);

const Reporte = mongoose.model("Reporte", reporteSchema);

export default Reporte;
