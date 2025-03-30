// components/team/TeamPageHeader.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BsShare, BsPencilSquare, BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineClock, HiOutlineCalendar } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const TeamPageHeader = ({ teamMembers }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-4 z-40 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-xl bg-white/80' : 'bg-white'
      } rounded-3xl p-8 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 animate-gradient" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Team
                </h1>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full 
                  text-sm font-medium shadow-lg shadow-blue-500/20 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Active
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-6 text-sm"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl text-gray-600">
                  <HiOutlineClock className="text-gray-400 text-lg" />
                  <span>Started: Jan 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl text-gray-600">
                  <HiOutlineCalendar className="text-gray-400 text-lg" />
                  <span>Due: Jun 30, 2024</span>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex -space-x-3">
                    {teamMembers.slice(0, 3).map((member, index) => (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        key={member.id}
                        className="relative"
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-gray-50"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="font-medium text-gray-700">{teamMembers.length} members</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              <BsThreeDotsVertical className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 flex items-center gap-2 text-gray-700 bg-gray-50 hover:bg-gray-100
              rounded-xl transition-all duration-300 font-medium"
            >
              <BsShare className="text-gray-500" />
              Share
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 
              text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 
              transition-all duration-300"
            >
              <BsPencilSquare />
              Edit Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamPageHeader;