import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const Img = mongoose.models?.Img || mongoose?.model("Img", imgSchema);

export default Img;
