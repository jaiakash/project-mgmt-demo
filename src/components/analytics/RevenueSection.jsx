import { useState, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { BsArrowUpShort, BsArrowDownShort, BsCalendar } from 'react-icons/bs';

const RevenueSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('year');

  // Generate data for different time periods
  const generateData = (period) => {
    let length;
    let startDate = new Date();

    switch (period) {
      case 'month':
        length = 30;
        return Array.from({ length }, (_, i) => {
          const date = new Date(startDate);
          date.setDate(date.getDate() - i);
          return {
            month: date.toLocaleString('default', { day: 'numeric', month: 'short' }),
            value: Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000,
            previousValue: Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000,
          };
        }).reverse();

      case 'quarter':
        length = 3;
        return Array.from({ length }, (_, i) => {
          const date = new Date(startDate);
          date.setMonth(date.getMonth() - i);
          return {
            month: date.toLocaleString('default', { month: 'long' }),
            value: Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000,
            previousValue: Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000,
          };
        }).reverse();

      case 'year':
      default:
        length = 12;
        return Array.from({ length }, (_, i) => {
          const date = new Date(startDate);
          date.setMonth(date.getMonth() - i);
          return {
            month: date.toLocaleString('default', { month: 'short' }),
            value: Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000,
            previousValue: Math.floor(Math.random() * (20000 - 8000 + 1)) + 8000,
          };
        }).reverse();
    }
  };

  // Memoize the data generation
  const revenueData = useMemo(() => {
    const data = generateData(selectedPeriod);
    return data.map(item => ({
      ...item,
      percentageChange: (((item.value - item.previousValue) / item.previousValue) * 100).toFixed(2)
    }));
  }, [selectedPeriod]);

  // Calculate current period's total revenue and change
  const currentPeriodStats = useMemo(() => {
    const currentValue = revenueData[revenueData.length - 1].value;
    const previousValue = revenueData[revenueData.length - 1].previousValue;
    const percentageChange = (((currentValue - previousValue) / previousValue) * 100).toFixed(2);

    return {
      revenue: currentValue,
      percentageChange: parseFloat(percentageChange),
      isPositive: parseFloat(percentageChange) > 0
    };
  }, [revenueData]);

  const colors = {
    primary: "#6366F1",
    secondary: "#818CF8",
    success: "#34D399",
    background: "from-indigo-500/5 to-violet-500/5",
    border: "border-indigo-50",
    text: "text-indigo-600",
  };

  const periodLabels = {
    month: 'Last 30 Days',
    quarter: 'Last Quarter',
    year: 'Last 12 Months'
  };

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
            <span className="text-xs text-gray-500 ml-1">vs previous period</span>
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
                    ${currentPeriodStats.revenue.toLocaleString()}
                  </motion.span>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-1 ${currentPeriodStats.isPositive ? 'text-emerald-500 bg-emerald-50' : 'text-red-500 bg-red-50'
                      } px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {currentPeriodStats.isPositive ? (
                      <BsArrowUpShort className="text-xl" />
                    ) : (
                      <BsArrowDownShort className="text-xl" />
                    )}
                    <span>{Math.abs(currentPeriodStats.percentageChange)}%</span>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Filter Dropdown */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2"
              >
                <div className="flex items-center gap-2">
                  <BsCalendar className="text-gray-400" />
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="text-sm font-medium px-4 py-2.5 rounded-xl bg-transparent
                      outline-none appearance-none cursor-pointer min-w-[160px]"
                  >
                    {Object.entries(periodLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
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

export default RevenueSection;