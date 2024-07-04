import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  phones: [
    {
      deviceName: {
        type: String,
      },
      deviceModel: {
        type: String,
      },
    },
  ],
});

const Phone = mongoose.models?.Phone || mongoose?.model("Phone", phoneSchema);

export default Phone;
