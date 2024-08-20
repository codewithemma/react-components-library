import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const Pdf = mongoose.models?.Pdf || mongoose?.model("Pdf", pdfSchema);

export default Pdf;
