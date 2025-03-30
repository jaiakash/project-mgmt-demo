// src/components/analytics/OverviewCards.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  BarChart, Bar, AreaChart, Area,
  ResponsiveContainer
} from 'recharts';
import { HiOutlineSparkles, HiOutlineClock } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';

const OverviewCards = ({ workingHoursData }) => {
  const cards = [
    {
      title: 'Total Projects',
      value: 182,
      change: '+12%',
      icon: <HiOutlineSparkles className="text-orange-500" />,
      gradient: 'from-orange-50 to-rose-50',
      buttonGradient: 'from-orange-500 to-rose-500',
      metric: {
        label: 'Completion rate',
        value: '85%'
      }
    },
    {
      title: 'Team Members',
      value: 14,
      change: '+2',
      icon: <RiTeamLine className="text-blue-500" />,
      gradient: 'from-blue-50 to-indigo-50',
      buttonGradient: 'from-blue-500 to-indigo-500',
      showTeam: true
    },
    {
      title: 'Working Hours',
      value: '37h',
      change: '+5.2%',
      icon: <HiOutlineClock className="text-purple-500" />,
      gradient: 'from-purple-50 to-pink-50',
      buttonGradient: 'from-purple-500 to-pink-500',
      showChart: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          {...card}
          delay={index * 0.1}
          workingHoursData={workingHoursData}
        />
      ))}
    </div>
  );
};

// Add this Modal component
const Modal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {type === 'team' ? 'Add New Team Member' : 'Create New Project'}
            </h3>
            <p className="text-gray-500 mt-1">
              {type === 'team'
                ? 'Invite a new member to join your team'
                : 'Start a new project with your team'}
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {type === 'team' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="colleague@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Team Member</option>
                    <option>Team Lead</option>
                    <option>Project Manager</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    rows="3"
                    placeholder="Brief project description"
                  />
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white
                bg-gradient-to-r ${type === 'team' ? 'from-blue-500 to-indigo-500' : 'from-orange-500 to-rose-500'}
                hover:opacity-90 transition-all transform active:scale-95`}
            >
              {type === 'team' ? 'Send Invitation' : 'Create Project'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Card = ({
  title,
  value,
  change,
  icon,
  gradient,
  buttonGradient,
  metric,
  showTeam,
  showChart,
  delay,
  workingHoursData
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl 
      transition-all border border-gray-100 overflow-hidden group"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 
        group-hover:opacity-100 transition-opacity`} />

      <div className="relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-700 font-medium">{title}</h3>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {change}
            </span>
          </div>
          <span className="p-2 rounded-xl bg-opacity-50 group-hover:scale-110 transition-transform"
            style={{ backgroundColor: `var(--${gradient.split('-')[1]})` }}>
            {icon}
          </span>
        </div>

        {/* Value */}
        <motion.p
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          {value}
        </motion.p>

        {/* Metric or Team or Chart */}
        {metric && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{metric.label}</span>
              <span className="text-gray-700 font-medium">{metric.value}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: metric.value }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${buttonGradient}`}
              />
            </div>
          </div>
        )}

        {showTeam && (
          <div className="flex -space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img
                  src={`https://ui-avatars.com/api/?name=User+${i}&background=6366f1&color=fff`}
                  alt={`Team member ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 
              flex items-center justify-center">
              <span className="text-xs text-gray-600">+9</span>
            </div>
          </div>
        )}

        {showChart && (
          <>
            <div className="text-sm text-purple-600 bg-purple-50 px-2 py-1 
              rounded-full inline-block mb-4">
              Avg. 148h/month
            </div>
            <div className="h-20">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={workingHoursData}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="hours"
                    stroke="#8B5CF6"
                    fill="url(#colorHours)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        <button
          onClick={() => setIsModalOpen(true)}
          className={`mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-white
          bg-gradient-to-r ${buttonGradient} hover:opacity-90
          transition-all transform active:scale-95 focus:ring-4 focus:ring-${gradient.split('-')[1]}`}
        >
          {showTeam ? 'Add New Member' : 'Add New Project'}
        </button>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={showTeam ? 'team' : 'project'}
        />

        {/* Hover Card */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white/95 rounded-xl shadow-lg p-4 z-50 w-48
        border border-gray-100/50 backdrop-blur-sm
        hover:shadow-xl transition-shadow duration-300"
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent 
        rounded-xl filter blur-xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-sm space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Previous</span>
                    <span className="font-medium text-gray-700">
                      {typeof value === 'number' ? value - 10 : '32h'}
                    </span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Change</span>
                    <span className="font-medium text-green-600">{change}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Dots */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-gray-300/50" />
              <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-gray-300/50" />
              <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-gray-300/50" />
              <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-gray-300/50" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OverviewCards;