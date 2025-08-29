import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  // Main hero content
  title: {
    type: String,
    required: true,
    default: "Master Your Money in Minutes"
  },
  subtitle: {
    type: String,
    required: true,
    default: "Empowering You, One Financial Decision at a Time. No finance background? No worries!"
  },
  
  // Stats section
  stats: [
    {
      number: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  ],
  
  // App links
  finlitLearn: {
    playStore: {
      type: String,
      required: true,
      default: "https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
    },
    appStore: {
      type: String,
      required: true,
      default: "https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone"
    }
  },
  
  finlitInvest: {
    playStore: {
      type: String,
      required: true,
      default: "https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
    },
    appStore: {
      type: String,
      required: true,
      default: "#"
    }
  },
  
  // Background and styling
  backgroundGradient: {
    type: String,
    default: "from-slate-50 via-blue-50 to-indigo-50"
  },
  
  // Animation settings
  animations: {
    enabled: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 800
    }
  },
  
  // SEO and metadata
  metaTitle: {
    type: String,
    default: "FinLit - Master Your Money in Minutes"
  },
  metaDescription: {
    type: String,
    default: "Empowering financial education through interactive courses and smart investing tools."
  },
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create a default hero data method
heroSchema.statics.getDefaultHero = function() {
  return {
    title: "Master Your Money in Minutes",
    subtitle: "Empowering You, One Financial Decision at a Time. No finance background? No worries!",
    stats: [
      {
        number: "50K+",
        label: "Active Users",
        icon: "Users"
      },
      {
        number: "100+",
        label: "Free Courses",
        icon: "BookOpen"
      },
      {
        number: "4.8★",
        label: "User Rating",
        icon: "Award"
      }
    ],
    finlitLearn: {
      playStore: "https://play.google.com/store/apps/details?id=com.thefinlitproject.app",
      appStore: "https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone"
    },
    finlitInvest: {
      playStore: "https://play.google.com/store/apps/details?id=com.thefinlitproject.invest",
      appStore: "#"
    },
    backgroundGradient: "from-slate-50 via-blue-50 to-indigo-50",
    animations: {
      enabled: true,
      duration: 800
    },
    metaTitle: "FinLit - Master Your Money in Minutes",
    metaDescription: "Empowering financial education through interactive courses and smart investing tools.",
    isActive: true
  };
};

const Hero = mongoose.model('Hero', heroSchema, 'Hero'); // Explicitly specify collection name

export default Hero;
