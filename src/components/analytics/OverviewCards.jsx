// src/components/analytics/OverviewCards.jsx
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

        {/* Button */}
        <button className={`mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-white
          bg-gradient-to-r ${buttonGradient} hover:opacity-90
          transition-all transform active:scale-95 focus:ring-4 focus:ring-${gradient.split('-')[1]}`}>
          {showTeam ? 'Add New Member' : 'Add New Project'}
        </button>

        {/* Hover Card */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -top-14 left-1/2 transform -translate-x-1/2 
              bg-white rounded-lg shadow-lg p-3 z-10 w-48"
            >
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Previous:</span>
                  <span className="font-medium text-gray-700">
                    {typeof value === 'number' ? value - 10 : '32h'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Change:</span>
                  <span className="font-medium text-green-600">{change}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OverviewCards;