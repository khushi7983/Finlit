// src/App.jsx
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md animate-fade-in-up transition-all duration-300 hover:shadow-xl">
        {/* Form Container with Toggle */}
        <div className="relative">
          {/* Login Form */}
          <div
            className={`${
              isLogin ? 'block' : 'hidden'
            } transition-opacity duration-500 ease-in-out`}
          >
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-500">
              Login
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="loginEmail">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  id="loginEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  id="loginPassword"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-400 hover:scale-105"
              >
                Login
              </button>
            </form>
          </div>

          {/* Signup Form */}
          <div
            className={`${
              !isLogin ? 'block' : 'hidden'
            } transition-opacity duration-500 ease-in-out`}
          >
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-500">
              Sign Up
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="signupEmail">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  id="signupEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="signupPassword">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  id="signupPassword"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-800 text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-400 hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <p className="mt-4 text-center">
          <span className="text-slate-800 text-sm">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button
            onClick={toggleForm}
            className="text-sm font-medium text-slate-800 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:bg-clip-text hover:text-transparent"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;