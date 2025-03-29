import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import {
  RiNotification3Line,
  RiSearchLine,
  RiArrowDownSLine,
  RiTeamLine,
  RiTimeLine,
  RiMoneyDollarCircleLine
} from 'react-icons/ri';
import { HiOutlineSparkles, HiOutlineClock } from 'react-icons/hi';
import { BsArrowRight, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
const AnalyticsPage = () => {
  const workingHoursData = [
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 7.5 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 8 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 2 }
  ];
  const revenueData = [
    { month: 'Jan', value: 3000, profit: true },
    { month: 'Feb', value: 2800, profit: false },
    { month: 'Mar', value: 4000, profit: true },
    { month: 'Apr', value: 3800, profit: true },
    { month: 'May', value: 2900, profit: false },
    { month: 'Jun', value: 3200, profit: true },
    { month: 'Jul', value: 3800, profit: true },
    { month: 'Aug', value: 4200, profit: true },
    { month: 'Sep', value: 3900, profit: true },
    { month: 'Oct', value: 3700, profit: false },
    { month: 'Nov', value: 3500, profit: true },
    { month: 'Dec', value: 3800, profit: true }
  ];
  const projectCategories = [
    {
      name: 'Research',
      icon: '📊',
      description: 'Market analysis & data',
      activeProjects: 12,
      progress: 65
    },
    {
      name: 'Marketing',
      icon: '💡',
      description: 'Business planning',
      activeProjects: 8,
      progress: 72
    },
    {
      name: 'Operations',
      icon: '⚙️',
      description: 'Process optimization',
      activeProjects: 18,
      progress: 45
    },
    {
      name: 'Customers',
      icon: '👥',
      description: 'Client relationships',
      activeProjects: 15,
      progress: 58
    }
  ];
  const categoryStyles = [
    {
      gradient: 'from-orange-50 to-rose-50',
      border: 'border-orange-100/30',
      progress: 'bg-orange-200',
      button: 'bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-100'
    },
    {
      gradient: 'from-blue-50 to-indigo-50',
      border: 'border-blue-100/30',
      progress: 'bg-blue-200',
      button: 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100'
    },
    {
      gradient: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-100/30',
      progress: 'bg-emerald-200',
      button: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-100'
    },
    {
      gradient: 'from-purple-50 to-violet-50',
      border: 'border-purple-100/30',
      progress: 'bg-purple-200',
      button: 'bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-100'
    }
  ];
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 min-h-screen relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-20 left-60 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-60 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-20" />
      </div>
      {/* Enhanced Header */}
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
      {/* Enhanced Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all 
          border border-gray-100 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-50 opacity-0 
          group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-700 font-medium">Total Projects</h3>
              <span className="p-2 rounded-xl bg-orange-50 group-hover:scale-110 transition-transform">
                <HiOutlineSparkles className="text-orange-500" />
              </span>
            </div>
            <motion.p
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              182
            </motion.p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Completion rate</span>
                <span className="text-gray-700 font-medium">85%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 to-rose-400"
                />
              </div>
            </div>
            <button className="mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-white
            bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600
            transition-all transform active:scale-95 focus:ring-4 focus:ring-orange-200">
              Add New Project
            </button>
          </div>
        </motion.div>
        {/* Team Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all 
          border border-gray-100 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 
          group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-700 font-medium">Team Members</h3>
              <span className="p-2 rounded-xl bg-blue-50 group-hover:scale-110 transition-transform">
                <RiTeamLine className="text-blue-500" />
              </span>
            </div>
            <motion.p
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              14
            </motion.p>
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
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-600">+9</span>
              </div>
            </div>
            <button className="mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-white
            bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600
            transition-all transform active:scale-95 focus:ring-4 focus:ring-blue-200">
              Add New Member
            </button>
          </div>
        </motion.div>
        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all 
          border border-gray-100 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 
          group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-700 font-medium">Working Hours</h3>
              <span className="p-2 rounded-xl bg-purple-50 group-hover:scale-110 transition-transform">
                <HiOutlineClock className="text-purple-500" />
              </span>
            </div>
            <motion.p
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold text-gray-800 mb-2"
            >
              37h
            </motion.p>
            <div className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded-full inline-block mb-4">
              Avg. 148h/month
            </div>
            <ResponsiveContainer width="100%" height={80}>
              <BarChart data={workingHoursData} barSize={8}>
                <Bar
                  dataKey="hours"
                  fill="url(#colorHours)"
                  radius={[4, 4, 4, 4]}
                />
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      {/* Enhanced Project Progress Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Project Progress</h2>
              <p className="text-gray-500 text-sm mt-1">Track your project milestones</p>
            </div>
            <div className="flex gap-2">
              {['Research', 'Design', 'Development', 'Marketing'].map((label, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 cursor-pointer
                  hover:bg-gray-100 transition-colors"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="h-16 bg-gray-50 rounded-2xl overflow-hidden flex mb-4">
              {[
                { width: '25%', color: 'from-blue-400 to-blue-500' },
                { width: '35%', color: 'from-purple-400 to-purple-500' },
                { width: '15%', color: 'from-pink-400 to-pink-500' },
                { width: '25%', color: 'from-orange-400 to-orange-500' }
              ].map((bar, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: bar.width }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className={`h-full bg-gradient-to-r ${bar.color} group-hover:opacity-80 transition-opacity`}
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
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-sm text-gray-600">Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-sm text-gray-600">Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span className="text-sm text-gray-600">Development</span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm text-blue-600 font-medium">On track</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Enhanced Revenue Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm mb-8 border border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 
        rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Project Revenue</h2>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-800">$12,856.14</span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1 text-emerald-600 bg-gradient-to-r from-emerald-50 to-green-50 
                  px-3 py-1.5 rounded-full text-sm border border-emerald-100"
                >
                  <BsArrowUpShort size={20} />
                  <span>8.2%</span>
                </motion.div>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
              <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 
              text-transparent bg-clip-text mt-1">
                Avg. $3,000/month
              </div>
            </div>
            <motion.select
              whileHover={{ scale: 1.02 }}
              className="text-sm border-2 border-gray-200 rounded-xl px-4 py-2 bg-white shadow-sm
              focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer"
            >
              <option>Year</option>
              <option>Month</option>
              <option>Quarter</option>
            </motion.select>
          </div>
          {/* Enhanced Chart */}
          <div className="relative">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData} barSize={32}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity={1} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.8} />
                  </linearGradient>
                  <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F87171" stopOpacity={1} />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748B', fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  cursor={{ fill: '#F8FAFC' }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                          <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
                          <p className="text-lg font-bold text-gray-800">
                            ${payload[0].value}
                          </p>
                          <div className="flex items-center gap-1 text-sm mt-1">
                            <span className={payload[0].payload.profit ? 'text-green-500' : 'text-red-500'}>
                              {payload[0].payload.profit ? '▲' : '▼'}
                              {Math.random().toFixed(1)}%
                            </span>
                            <span className="text-gray-500">vs prev month</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="value"
                  fill={(data) => data.profit ? 'url(#colorProfit)' : 'url(#colorLoss)'}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-sm text-gray-600">Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-sm text-gray-600">Loss</span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Enhanced Project Categories Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 
          rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 
          rounded-full blur-3xl opacity-10" />
        </div>
        <div className="relative">
          {/* Header */}
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
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative rounded-2xl p-6 cursor-pointer overflow-hidden
                bg-gradient-to-br ${categoryStyles[index].gradient} border ${categoryStyles[index].border}
                group hover:shadow-lg transition-all duration-300`}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                {/* Category Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-3xl transform transition-transform"
                    >
                      {category.icon}
                    </motion.span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-xs font-medium bg-white/80 
                      backdrop-blur-sm px-2 py-1 rounded-full"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${category.progress > 60 ? 'bg-green-500' :
                        category.progress > 30 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                      {category.progress}%
                    </motion.div>
                  </div>
                  {/* Category Info */}
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Active projects</span>
                      <span className="font-medium text-gray-800">{category.activeProjects}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${category.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${categoryStyles[index].progress}`}
                      />
                    </div>
                  </div>
                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-6 w-full py-2.5 px-4 rounded-xl text-sm font-medium
                    ${categoryStyles[index].button} flex items-center justify-center gap-2 group`}
                  >
                    View Details
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                {/* Interactive Elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm 
                    hover:bg-white/30 transition-colors"
                  >
                    <BsArrowRight className="text-gray-800" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: 'Total Tasks', value: '234', icon: '📋' },
              { label: 'In Progress', value: '45', icon: '🔄' },
              { label: 'Completed', value: '189', icon: '✅' },
              { label: 'Success Rate', value: '94%', icon: '📈' }
            ].map((stat, index) => (
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
          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {['#Research', '#Strategy', '#Operations', '#Design', '#Development'].map((tag, index) => (
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
        </div>
      </motion.div>
    </div>
  );
};
export default AnalyticsPage;