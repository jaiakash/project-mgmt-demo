// components/dashboard/Welcome.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { IoSearchOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useState } from 'react';

const Welcome = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-8 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-3xl" />

      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Welcome back, Juliana!
              </h1>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl"
              >
                👋
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-600">Online</span>
              </div>
              <p className="text-gray-500">Here's your agenda for today</p>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
            {/* Search Bar */}
            <motion.div
              animate={isSearchFocused ? { scale: 1.02 } : { scale: 1 }}
              className="relative group"
            >
              <input
                type="text"
                placeholder="Search anything..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-72 px-4 py-3 pl-12 bg-gray-50/50 rounded-xl 
                border border-gray-200 focus:border-blue-300 
                focus:ring-4 focus:ring-blue-100/50 outline-none
                transition-all duration-300 placeholder:text-gray-400"
              />
              <IoSearchOutline
                className={`absolute left-4 top-1/2 -translate-y-1/2 
                ${isSearchFocused ? 'text-blue-500' : 'text-gray-400'}
                transition-colors duration-200`}
                size={20}
              />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 
                px-2 py-0.5 text-xs text-gray-400 bg-gray-100 
                rounded hidden group-hover:inline-block">
                ⌘ K
              </kbd>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-gray-50/50 rounded-xl hover:bg-gray-100 transition-colors relative"
              >
                <IoNotificationsOutline size={22} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs 
                  rounded-full flex items-center justify-center">3</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2.5 bg-gray-50/50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                {isDark ? (
                  <HiOutlineMoon size={22} className="text-gray-600" />
                ) : (
                  <HiOutlineSun size={22} className="text-gray-600" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-gray-50/50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <IoSettingsOutline size={22} className="text-gray-600" />
              </motion.button>

              {/* Profile */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl overflow-hidden ring-2 ring-gray-100 
                  hover:ring-4 transition-all duration-200">
                  <img
                    src="https://ui-avatars.com/api/?name=Juliana&background=6366f1&color=fff"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full 
                    border-2 border-white"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
};

export default Welcome;