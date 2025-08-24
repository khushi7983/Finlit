import mongoose from "mongoose";
import slugify from 'slugify'; // Install this package: npm install slugify

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, required: true },
  category: { type: String, required: true },
  shortDescription: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: "/src/assets/finlit-logo.png" },
  keywords: [{ type: String }],
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  featured: { type: Boolean, default: false },
  readTime: { type: String, default: "5 min read" },
  publishDate: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  tags: [{ type: String }],
  slug: { type: String, unique: true } // Add slug field
}, { timestamps: true });

// Middleware to generate slug before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title') || this.isNew) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Blog = mongoose.model("Blog", blogSchema, "FinLitBlog");
export default Blog;