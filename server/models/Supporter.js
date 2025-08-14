import mongoose from "mongoose";

const supporterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  alt: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, default: "partner" },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

const Supporter = mongoose.model("Supporter", supporterSchema);
export default Supporter;
