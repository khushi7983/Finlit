// components/Login/AuthForm.jsx (COMPLETE FILE)
import { useState, useEffect } from 'react';
import { authAPI } from '../../services/api';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Globe
} from 'lucide-react';

function AuthForm({ authAPI }) { // Receive authAPI as prop
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Form states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // LOGIN HANDLER
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    console.log('🔄 Attempting login with:', loginData);

    try {
      const response = await authAPI.login(loginData.email, loginData.password);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setSuccess('Login successful! Redirecting...');
        
        setTimeout(() => {
          window.location.href = '/what-we-do';
        }, 1500);
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      
      // IMPROVED ERROR HANDLING FOR LOGIN
      if (error.response?.data?.errors && error.response.data.errors.length > 0) {
        const errorMessages = error.response.data.errors.map(err => err.msg).join('. ');
        setError(errorMessages);
      } else {
        setError(error.response?.data?.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // SIGNUP HANDLER WITH IMPROVED ERROR HANDLING
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // FRONTEND VALIDATION
    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    console.log('🔄 Attempting signup with:', signupData);

    try {
      const response = await authAPI.register(signupData.email, signupData.password);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setSuccess('Account created successfully! Redirecting...');
        
        setTimeout(() => {
          window.location.href = '/what-we-do';
        }, 1500);
      }
    } catch (error) {
      console.error('❌ Signup error:', error);
      
      // IMPROVED ERROR HANDLING - Show specific validation errors
      if (error.response?.data?.errors && error.response.data.errors.length > 0) {
        const errorMessages = error.response.data.errors.map(err => err.msg).join('. ');
        setError(errorMessages);
      } else {
        setError(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
        aria-hidden
      />

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-12 animate-pulse" style={{ animationDelay: "4s" }} />

      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="w-full max-w-md"
        >
          <motion.div
            variants={cardVariant}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-3xl opacity-20" />
            
            <div className="relative z-10">
              {/* Form Header */}
              <div className="text-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-6 h-6 text-slate-900" />
                </motion.div>
                
                <h2 className="text-xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    {isLogin ? 'Welcome Back' : 'Get Started'}
                  </span>
                </h2>
              </div>

              {/* ERROR/SUCCESS MESSAGES */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-600 text-sm">{success}</p>
                </div>
              )}

              {/* Form Container */}
              <div className="relative overflow-hidden">
                {/* Login Form */}
                <motion.div
                  className={`${isLogin ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isLogin ? 1 : 0, x: isLogin ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="loginEmail">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/50"
                          id="loginEmail"
                          type="email"
                          placeholder="Enter your email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="loginPassword">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/50"
                          id="loginPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="ml-2 text-slate-600">Remember me</span>
                      </label>
                      <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">
                        Forgot password?
                      </a>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-slate-900 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                      {loading ? 'Signing In...' : 'Sign In'}
                      {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Signup Form */}
                <motion.div
                  className={`${!isLogin ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: !isLogin ? 1 : 0, x: !isLogin ? 0 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="signupEmail">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/50"
                          id="signupEmail"
                          type="email"
                          placeholder="Enter your email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="signupPassword">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/50"
                          id="signupPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password (min 6 characters)"
                          value={signupData.password}
                          onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 bg-white/50"
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                          required
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" className="rounded border-slate-300 text-yellow-500 focus:ring-yellow-500 mt-1" required />
                      <span className="ml-2 text-sm text-slate-600">
                        I agree to the <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">Terms of Service</a> and <a href="#" className="text-yellow-600 hover:text-yellow-700 font-medium">Privacy Policy</a>
                      </span>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-slate-900 font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                      {loading ? 'Creating Account...' : 'Create Account'}
                      {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              {/* Form Toggle */}
              <div className="mt-6 text-center">
                <span className="text-slate-600 text-sm">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                </span>
                <motion.button
                  onClick={toggleForm}
                  className="text-sm font-medium bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </motion.button>
              </div>

              {/* Social Login */}
              <div className="mt-5">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/80 text-slate-600">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-200 rounded-xl shadow-sm bg-white/50 text-sm font-medium text-slate-600 hover:bg-white/80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2">Google</span>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-200 rounded-xl shadow-sm bg-white/50 text-sm font-medium text-slate-600 hover:bg-white/80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AuthForm;
