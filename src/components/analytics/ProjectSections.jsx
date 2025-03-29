// src/components/analytics/ProjectSections.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { BsArrowRight, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const ProjectSections = ({ revenueData, projectCategories, categoryStyles }) => {
  return (
    <>
      <ProjectProgress />
      <RevenueSection revenueData={revenueData} />
      <ProjectCategories 
        categories={projectCategories} 
        styles={categoryStyles} 
      />
    </>
  );
};

// Project Progress Section
const ProjectProgress = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const phases = ['Research', 'Design', 'Development', 'Marketing'];
  const progressBars = [
    { width: '25%', color: 'from-blue-400 to-blue-500' },
    { width: '35%', color: 'from-purple-400 to-purple-500' },
    { width: '15%', color: 'from-pink-400 to-pink-500' },
    { width: '25%', color: 'from-orange-400 to-orange-500' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100 relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Project Progress</h2>
          <p className="text-gray-500 text-sm mt-1">Track your project milestones</p>
        </div>
        <div className="flex gap-2">
          {phases.map((phase, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 
              cursor-pointer hover:bg-gray-100 transition-colors"
            >
              {phase}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="h-16 bg-gray-50 rounded-2xl overflow-hidden flex mb-4">
        {progressBars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: bar.width }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className={`h-full bg-gradient-to-r ${bar.color}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {['February', 'March', 'April'].map((month, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -2 }}
            className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-700">{month}</span>
              <span className="text-xs text-gray-500">2024</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Revenue Section
const RevenueSection = ({ revenueData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100 relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Project Revenue</h2>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-800">$12,856.14</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-emerald-600 bg-gradient-to-r from-emerald-50 
              to-green-50 px-3 py-1.5 rounded-full text-sm border border-emerald-100"
            >
              <BsArrowUpShort size={20} />
              <span>8.2%</span>
            </motion.div>
          </div>
        </div>

        <motion.select
          whileHover={{ scale: 1.02 }}
          className="text-sm border-2 border-gray-200 rounded-xl px-4 py-2 bg-white shadow-sm"
        >
          <option>Year</option>
          <option>Month</option>
          <option>Quarter</option>
        </motion.select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} barSize={32}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="value" 
              fill={(data) => data.profit ? '#60A5FA' : '#F87171'}
              radius={[6, 6, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

// Project Categories Section
const ProjectCategories = ({ categories, styles }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Project Categories</h2>
          <p className="text-gray-500 text-sm mt-1">Overview of project distribution</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 text-gray-600 
          hover:bg-gray-100 transition-colors text-sm font-medium group"
        >
          See more
          <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            category={category}
            style={styles[index]}
            delay={index * 0.1}
          />
        ))}
      </div>

      <QuickStats />
      <CategoryTags />
    </motion.div>
  );
};

// Helper Components
const CategoryCard = ({ category, style, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative rounded-2xl p-6 cursor-pointer overflow-hidden
      bg-gradient-to-br ${style.gradient} border ${style.border}
      group hover:shadow-lg transition-all duration-300`}
    >
      {/* Card content */}
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-3xl"
          >
            {category.icon}
          </motion.span>
          <span className="text-xs font-medium bg-white/80 px-2 py-1 rounded-full">
            {category.progress}%
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{category.description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Active projects</span>
            <span className="font-medium text-gray-800">{category.activeProjects}</span>
          </div>
          
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${category.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${style.progress}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const QuickStats = () => {
  const stats = [
    { label: 'Total Tasks', value: '234', icon: '📋' },
    { label: 'In Progress', value: '45', icon: '🔄' },
    { label: 'Completed', value: '189', icon: '✅' },
    { label: 'Success Rate', value: '94%', icon: '📈' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 rounded-xl p-4 flex items-center gap-4"
        >
          <span className="text-2xl">{stat.icon}</span>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const CategoryTags = () => {
  const tags = ['#Research', '#Strategy', '#Operations', '#Design', '#Development'];

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600
          hover:bg-gray-200 transition-colors cursor-pointer"
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
};

export default ProjectSections;