import mongoose from 'mongoose';
import ESGFund from './models/ESGFund.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Sample ESG Fund data
const sampleESGFunds = [
  {
    title: "ESG Equity Fund",
    subtitle: "Sustainable Growth",
    description: "Invest in companies that prioritize environmental, social, and governance factors while delivering strong returns.",
    icon: "Leaf",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    features: [
      "Environmental sustainability focus",
      "Social responsibility screening",
      "Governance best practices",
      "Long-term value creation"
    ],
    minInvestment: "₹500",
    riskLevel: "Moderate",
    expectedReturn: "12-15%",
    isActive: true,
    order: 1
  },
  {
    title: "Green Energy Fund",
    subtitle: "Clean Technology",
    description: "Focus on renewable energy, clean technology, and sustainable infrastructure investments.",
    icon: "Zap",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    features: [
      "Renewable energy companies",
      "Clean technology focus",
      "Carbon footprint reduction",
      "Future-ready investments"
    ],
    minInvestment: "₹1000",
    riskLevel: "Moderate to High",
    expectedReturn: "15-18%",
    isActive: true,
    order: 2
  },
  {
    title: "Social Impact Fund",
    subtitle: "Community Development",
    description: "Invest in companies that create positive social impact through education, healthcare, and community development.",
    icon: "Heart",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    features: [
      "Education technology",
      "Healthcare innovation",
      "Financial inclusion",
      "Community development"
    ],
    minInvestment: "₹750",
    riskLevel: "Moderate",
    expectedReturn: "10-14%",
    isActive: true,
    order: 3
  }
];

// Seed ESG funds
const seedESGFunds = async () => {
  try {
    await connectDB();
    
    // Clear existing ESG funds
    await ESGFund.deleteMany({});
    console.log('🗑️ Cleared existing ESG funds');
    
    // Insert sample ESG funds
    const createdFunds = await ESGFund.insertMany(sampleESGFunds);
    console.log(`✅ Created ${createdFunds.length} ESG funds`);
    
    console.log('📊 Sample ESG funds created:');
    createdFunds.forEach(fund => {
      console.log(`- ${fund.title}: ${fund.subtitle}`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding ESG funds:', error);
    process.exit(1);
  }
};

seedESGFunds();
