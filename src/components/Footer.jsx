import React from "react";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Download,
  Smartphone,
  Heart,
  ChevronRight,
  Star,
  Shield,
  Users,
  TrendingUp
} from "lucide-react";

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50l20-20v40l-20-20z\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] bg-repeat"></div>
    </div>
    
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
              Making financial literacy accessible to everyone. Join thousands of learners 
              on their journey to financial freedom.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-300">SEBI Registered</span>
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
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-slate-300 mb-6">
                Get the latest financial tips, course updates, and exclusive content delivered to your inbox.
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
                { name: 'Free Courses', href: '#' },
                { name: 'Blog & Articles', href: '#' },
                { name: 'Success Stories', href: '#' },
                { name: 'Expert Webinars', href: '#' },
                { name: 'FAQ', href: '#' }
              ].map(item => (
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
                  <a href="mailto:support@finlit.com" className="text-white hover:text-yellow-400 transition-colors">
                    support@finlit.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-slate-300">Phone</p>
                  <a href="tel:+911234567890" className="text-white hover:text-yellow-400 transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-slate-300">Address</p>
                  <p className="text-white">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:bg-blue-500' },
                { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
                { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-500' },
                { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:bg-red-500' },
                { name: 'WhatsApp', icon: MessageCircle, href: '#', color: 'hover:bg-green-500' }
              ].map(social => (
                <a 
                  key={social.name}
                  href={social.href}
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
            <div className="space-y-3">
              <button className="group w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-300">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
              <button className="group w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/10">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-300">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>
            
            {/* App Features */}
            <div className="mt-6 space-y-2">
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
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Disclaimer'].map(item => (
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
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> in India
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      {/* <div className="bg-slate-900/50 backdrop-blur-sm">
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
      </div> */}
    </div>
  </footer>
);

export default Footer;