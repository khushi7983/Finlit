import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Hero from './models/Hero.js';

dotenv.config();

const seedHeroData = async () => {
  try {
    await connectDB();
    
    // Clear existing hero data
    await Hero.deleteMany({});
    
    // Create default hero data
    const heroData = {
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
    
    const hero = await Hero.create(heroData);
    
    console.log('Hero data seeded successfully:', hero);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding hero data:', error);
    process.exit(1);
  }
};

seedHeroData();
