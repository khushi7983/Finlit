import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true }, // "all" or "micro"
  keywords: [{ type: String }], // for filtering
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  duration: { type: String, default: "" },
  level: { type: String, default: "Beginner" }, // Beginner, Intermediate, Advanced
  rating: { type: Number, min: 0, max: 5, default: 0 },
  enrolledCount: { type: Number, default: 0 }
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export default Course;
