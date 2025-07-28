import {
  BookOpen,
  ChevronRight,
  Download,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [licenses, setLicenses] = useState([
    {
      type: "BSE Member Code",
      value: "56333",
      logo: <Shield className="w-8 h-8 text-yellow-400" />,
    },
    {
      type: "NSE Member Code",
      value: "1000906",
      logo: <Star className="w-8 h-8 text-yellow-400" />,
    },
    {
      type: "AMFI ARN Number",
      value: "249730",
      logo: <Users className="w-8 h-8 text-yellow-400" />,
    },
  ]);

  useEffect(() => {
    // This could be replaced with a fetch call to an admin panel API in the future
    // fetch('/api/licenses').then(res => res.json()).then(setLicenses);
  }, []);

  return (
    <footer className="relative bg-wave text-white overflow-hidden">
      {/* Background Pattern with Wave Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50l20-20v40l-20-20z\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      <style>
        {`
          .bg-wave {
            background: linear-gradient(135deg, #1e1b4b, #2d1b69);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23404080' fill-opacity='0.3' d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: cover;
            background-position: bottom;
            animation: wave 10s infinite linear;
          }
          @keyframes wave {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 0%; }
          }
          .license-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 30%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 150px;
          }
          .license-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }
          .license-card h4 {
            margin: 10px 0 5px;
            font-size: 1.1rem;
            color: #d4af37;
          }
          .license-card p {
            font-size: 1rem;
            color: #e0e0e0;
          }
        `}
      </style>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 ">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Brand & Newsletter */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold">Fin Lit Project</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Making financial literacy accessible to everyone. Join thousands
                of learners on their journey to financial freedom.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                  <Shield className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">
                    SEBI Registered
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">50K+ Users</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-300">4.8 Rating</span>
                </div>
              </div>

              {/* Licenses */}
<div className="mt-6 w-full">
  <p className="text-sm text-slate-300 mb-4">Our Licenses:</p>
  <div className="flex w-full justify-evenly items-center">
    {licenses.map((license, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center w-1/3 h-24 mx-2 hover:-translate-y-2 transition-transform"
      >
        {license.logo}
        <h4 className="mt-2 text-yellow-400 text-sm font-semibold">{license.type}</h4>
        <p className="text-white text-base">{license.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-slate-300 mb-6">
                  Get the latest financial tips, course updates, and exclusive
                  content delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Subscribe
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-yellow-400" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Free Courses", href: "#" },
                  { name: "Blog & Articles", href: "#" },
                  { name: "Success Stories", href: "#" },
                  { name: "Expert Webinars", href: "#" },
                  { name: "FAQ", href: "#" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a
                      href="mailto:support@finlit.com"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      support@finlit.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-slate-300">Phone</p>
                    <a
                      href="tel:+911234567890"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-slate-300">Address</p>
                    <p className="text-white">Lucknow, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Twitter",
                    icon: Twitter,
                    href: "https://x.com/FinLitIndia",
                    color: "hover:bg-blue-500",
                  },
                  {
                    name: "LinkedIn",
                    icon: Linkedin,
                    href:
                      "https://www.linkedin.com/company/the-fin-lit-project/posts/?feedView=all",
                    color: "hover:bg-blue-600",
                  },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    href: "https://www.instagram.com/thefinlitproject/",
                    color: "hover:bg-pink-500",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    href:
                      "https://www.youtube.com/channel/UCH-nWXtMHz-wmg176HqBSvg",
                    color: "hover:bg-red-500",
                  },
                  {
                    name: "WhatsApp",
                    icon: MessageCircle,
                    href:
                      "https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0",
                    color: "hover:bg-green-500",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10 transition-all duration-300 ${social.color} hover:scale-105`}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-yellow-400" />
                Download App
              </h3>

              <div className="flex flex-wrap gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Finlit Learn</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Finlit Learn</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>

                {/* Windows Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Finlit Invest</div>
                    <div className="text-base font-bold">Windows Store</div>
                  </div>
                </a>

                {/* Mac Store */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Finit Invest</div>
                    <div className="text-base font-bold">Mac Store</div>
                  </div>
                </a>
              </div>

              {/* App Features
              <div className="mt-6 space-x-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  Offline Learning
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  Progress Tracking
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  Expert Support
                </div>
              </div> */}
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Disclaimer",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-400 fill-current" /> in India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 Fin Lit Project. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>🇮🇳 Made in India</span>
                <span>•</span>
                <span>SEBI Registered</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
