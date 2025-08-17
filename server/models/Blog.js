import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: "/src/assets/finlit-logo.png" },
  keywords: [{ type: String }], // for filtering
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  readTime: { type: String, default: "5 min read" },
  publishDate: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  tags: [{ type: String }]
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema, "FinLitBlog");
export default Blog;
