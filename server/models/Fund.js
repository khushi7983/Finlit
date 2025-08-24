import mongoose from "mongoose";

const fundSchema = new mongoose.Schema({
  // Basic Information
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  
  // Credentials
  credentials: {
    amfiArn: { type: String, required: true },
    bseCode: { type: String, required: true },
    nseCode: { type: String, required: true }
  },
  
  // Mission Section
  mission: {
    title: { type: String, required: true },
    content: { type: String, required: true }
  },
  
  // Why Invest Features
  whyInvestFeatures: [{
    id: { type: Number, required: true },
    icon: { type: String, required: true }, // Icon name from lucide-react
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true }, // CSS gradient classes
    bgColor: { type: String, required: true } // CSS background classes
  }],
  
  // What We Offer Features
  whatWeOfferFeatures: [{
    id: { type: Number, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    bgColor: { type: String, required: true }
  }],
  
  // ESG Section
  esg: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    features: [{
      icon: { type: String, required: true },
      text: { type: String, required: true }
    }],
    whyChooseTitle: { type: String, required: true },
    howItWorksTitle: { type: String, required: true },
    howItWorksDescription: { type: String, required: true },
    startAmount: { type: String, required: true },
    ctaText: { type: String, required: true }
  },
  
  // Safety Section
  safety: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true }
  },
  
  // Contact Section
  contact: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: { type: String, required: true },
    email: { type: String, required: true },
    ctaText: { type: String, required: true }
  },
  
  // Join Movement Section
  joinMovement: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  
  // Status
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Fund = mongoose.model("fund", fundSchema);
export default Fund;
