import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  organization: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  altText: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Award = mongoose.model("award", awardSchema);
export default Award;
