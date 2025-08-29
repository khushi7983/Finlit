// migrateSlugs.js
import mongoose from "mongoose";
import slugify from "slugify";
import Blog from "./models/Blog.js";

// 🔑 Replace with your real Atlas credentials
const ATLAS_URI = "mongodb+srv://finlit_admin:y0qpIEkxz15xojGL@finlit-cluster.476euhl.mongodb.net/FinLit?retryWrites=true&w=majority";

const migrateSlugs = async () => {
  try {
    await mongoose.connect(ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB Atlas");

    // find blogs without slug
    const blogs = await Blog.find({ slug: { $exists: false } });

    if (blogs.length === 0) {
      console.log("⚠️ No blogs found without slug.");
    } else {
      for (let blog of blogs) {
        blog.slug = slugify(blog.title, { lower: true, strict: true });
        await blog.save();
        console.log(`🔗 Updated slug for: ${blog.title} -> ${blog.slug}`);
      }
      console.log("🎉 Slug migration complete!");
    }

    process.exit();
  } catch (error) {
    console.error("❌ Error during migration:", error);
    process.exit(1);
  }
};

migrateSlugs();
