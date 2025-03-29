// src/components/analytics/Header.jsx
import { motion } from 'framer-motion';
import { RiNotification3Line, RiSearchLine, RiArrowDownSLine } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="relative z-10 flex justify-between items-center mb-8">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          Report Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-sm mt-1 flex items-center gap-2"
        >
          Financial year 2024
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
        </motion.p>
      </div>

      <div className="flex items-center gap-6">
        {/* Modern Search Bar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-300 
            focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
          />
          <RiSearchLine className="absolute right-3 top-2.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </motion.div>

        {/* Notification Bell */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
        >
          <RiNotification3Line className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        </motion.button>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 p-1.5 pr-3 rounded-xl bg-white shadow-sm hover:shadow-md 
          transition-all cursor-pointer border border-gray-100"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <RiArrowDownSLine className="text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;