import mongoose from "mongoose";

const offeringSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  cta: { type: String, required: true },
  gradient: { type: String, required: true },
}, { timestamps: true });

const Offering = mongoose.model("offering", offeringSchema);
export default Offering;
