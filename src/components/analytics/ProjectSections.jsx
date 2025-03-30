// src/components/analytics/ProjectSections.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { BsArrowRight, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
const ProjectSections = ({ projectCategories, categoryStyles }) => {
  return (
    <>
      <ProjectProgress />
      <RevenueSection />
      <ProjectCategories
        categories={projectCategories}
        styles={categoryStyles}
      />
    </>
  );
};
// Project Progress Section
const ProjectProgress = () => {
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

const RevenueSection = () => {
  // Calculate current month's total revenue
  const currentMonthRevenue = 12856.14;
  const percentageChange = 12.5;
  const isPositive = percentageChange > 0;

  // Generate random data with month-over-month changes
  const revenueData = Array.from({ length: 12 }, (_, i) => {
    const currentValue = Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000;
    const previousValue = Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000;
    const percentageChange = ((currentValue - previousValue) / previousValue * 100).toFixed(2);

    return {
      month: new Date(0, i).toLocaleString('default', { month: 'short' }),
      value: currentValue,
      previousValue: previousValue,
      percentageChange: percentageChange
    };
  });

  const colors = {
    primary: "#6366F1",
    secondary: "#818CF8",
    success: "#34D399",
    background: "from-indigo-500/5 to-violet-500/5",
    border: "border-indigo-50",
    text: "text-indigo-600",
  };

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isPositive = parseFloat(data.percentageChange) > 0;

      return (
        <div className="bg-white p-4 shadow-lg rounded-xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-600 mb-2">{label}</p>
          <p className="text-lg font-bold text-gray-800">
            ${data.value.toLocaleString()}
          </p>
          <div className={`flex items-center gap-1 mt-2 ${isPositive ? 'text-emerald-500' : 'text-red-500'
            }`}>
            {isPositive ? (
              <BsArrowUpShort className="text-xl" />
            ) : (
              <BsArrowDownShort className="text-xl" />
            )}
            <span className="text-sm font-medium">
              {Math.abs(data.percentageChange)}%
            </span>
            <span className="text-xs text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-1"
      >
        <div className="bg-white/80 rounded-3xl p-8 shadow-xl shadow-indigo-100/10 
          border border-gray-100/80 backdrop-blur-xl relative overflow-hidden
          hover:bg-white/90 transition-all duration-300">

          {/* Glassmorphism Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-500/10 
            to-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/10 
            to-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-12">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-2"
                >
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 
                    bg-clip-text text-transparent">Revenue Analytics</h2>
                  <p className="text-gray-500">Real-time financial insights</p>
                </motion.div>

                <div className="flex items-center gap-4">
                  <motion.span
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-5xl font-bold text-gray-800"
                  >
                    ${currentMonthRevenue.toLocaleString()}
                  </motion.span>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-1 ${isPositive ? 'text-emerald-500 bg-emerald-50' : 'text-red-500 bg-red-50'
                      } px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {isPositive ? (
                      <BsArrowUpShort className="text-xl" />
                    ) : (
                      <BsArrowDownShort className="text-xl" />
                    )}
                    <span>{Math.abs(percentageChange)}%</span>
                  </motion.div>
                </div>
              </div>

              {/* Custom Filter Dropdown */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2"
              >
                <select className="text-sm font-medium px-4 py-2.5 rounded-xl bg-transparent
                  outline-none appearance-none cursor-pointer min-w-[160px]">
                  <option>Last 12 Months</option>
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                </select>
              </motion.div>
            </div>

            {/* Chart Section */}
            <div className="h-[400px] mt-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} barSize={48}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={colors.primary} stopOpacity={0.8} />
                      <stop offset="100%" stopColor={colors.secondary} stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 13 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 13 }}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="value"
                    fill="url(#colorGradient)"
                    radius={[8, 8, 0, 0]}
                    cursor="pointer"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
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