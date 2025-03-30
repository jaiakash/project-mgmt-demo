// components/dashboard/Categories.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BiSearch, BiBarChartAlt2 } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import {
  HiOutlineUserGroup,
  HiOutlineViewGrid,
  HiOutlineCode,
  HiOutlineTrendingUp,
  HiOutlinePencil,
  HiOutlineChartBar
} from 'react-icons/hi';
import { BsArrowRight, BsLightning } from 'react-icons/bs';
import { useState } from 'react';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Research",
      icon: <BiSearch size={28} />,
      description: "Market analysis & data",
      stats: { total: 24, active: 12 },
      color: "from-orange-500 to-pink-500",
      lightColor: "from-orange-50 to-pink-50",
      iconColor: "text-orange-500",
      progress: 65,
      trend: "+12%",
      lastUpdated: "2 hours ago",
      teamSize: 8,
      priority: "High"
    },
    {
      id: 2,
      name: "Strategy",
      icon: <BiBarChartAlt2 size={28} />,
      description: "Business planning & execution",
      stats: { total: 16, active: 8 },
      color: "from-emerald-500 to-green-500",
      lightColor: "from-emerald-50 to-green-50",
      iconColor: "text-emerald-500",
      progress: 72,
      trend: "+8%",
      lastUpdated: "4 hours ago",
      teamSize: 6,
      priority: "Medium"
    },
    {
      id: 3,
      name: "Operations",
      icon: <AiOutlineSetting size={28} />,
      description: "Process optimization & workflow",
      stats: { total: 32, active: 18 },
      color: "from-blue-500 to-indigo-500",
      lightColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-500",
      progress: 45,
      trend: "+15%",
      lastUpdated: "1 hour ago",
      teamSize: 12,
      priority: "High"
    },
    {
      id: 4,
      name: "Customers",
      icon: <HiOutlineUserGroup size={28} />,
      description: "Client relationships & support",
      stats: { total: 28, active: 15 },
      color: "from-purple-500 to-violet-500",
      lightColor: "from-purple-50 to-violet-50",
      iconColor: "text-purple-500",
      progress: 58,
      trend: "+10%",
      lastUpdated: "30 minutes ago",
      teamSize: 10,
      priority: "Medium"
    },
    {
      id: 5,
      name: "Development",
      icon: <HiOutlineCode size={28} />,
      description: "Product development & testing",
      stats: { total: 20, active: 14 },
      color: "from-red-500 to-rose-500",
      lightColor: "from-red-50 to-rose-50",
      iconColor: "text-red-500",
      progress: 80,
      trend: "+20%",
      lastUpdated: "1 day ago",
      teamSize: 15,
      priority: "High"
    },
    {
      id: 6,
      name: "Marketing",
      icon: <HiOutlineTrendingUp size={28} />,
      description: "Campaign planning & analytics",
      stats: { total: 22, active: 11 },
      color: "from-yellow-500 to-amber-500",
      lightColor: "from-yellow-50 to-amber-50",
      iconColor: "text-yellow-500",
      progress: 62,
      trend: "+5%",
      lastUpdated: "3 hours ago",
      teamSize: 9,
      priority: "Medium"
    },
    {
      id: 7,
      name: "Design",
      icon: <HiOutlinePencil size={28} />,
      description: "UI/UX and brand design",
      stats: { total: 18, active: 9 },
      color: "from-cyan-500 to-teal-500",
      lightColor: "from-cyan-50 to-teal-50",
      iconColor: "text-cyan-500",
      progress: 70,
      trend: "+15%",
      lastUpdated: "5 hours ago",
      teamSize: 7,
      priority: "High"
    },
    {
      id: 8,
      name: "Analytics",
      icon: <HiOutlineChartBar size={28} />,
      description: "Data analysis & reporting",
      stats: { total: 15, active: 8 },
      color: "from-fuchsia-500 to-pink-500",
      lightColor: "from-fuchsia-50 to-pink-50",
      iconColor: "text-fuchsia-500",
      progress: 55,
      trend: "+7%",
      lastUpdated: "2 days ago",
      teamSize: 5,
      priority: "Medium"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <HiOutlineViewGrid className="text-2xl text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Project categories
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Overview of project distribution
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-xl transition-colors"
            >
              <span className="text-sm font-medium">See all categories</span>
              <BsArrowRight size={16} />
            </motion.button>
          </div>

          {/* Categories Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl p-6 border border-gray-100
                    hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
                >
                  {/* Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.lightColor} opacity-50`} />
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/0 to-white/100 rounded-full blur-2xl" />
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-3xl`} />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: hoveredCategory === category.id ? 1.1 : 1,
                        rotate: hoveredCategory === category.id ? 5 : 0
                      }}
                      className={`${category.iconColor} p-3 bg-white rounded-xl shadow-sm mb-4 w-fit`}
                    >
                      {category.icon}
                    </motion.div>

                    <div className="space-y-2 mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <BsLightning className={category.iconColor} />
                          <span className="text-gray-600">{category.stats.active} active</span>
                        </div>
                        <span className="text-green-500 font-medium">{category.trend}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${category.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium text-gray-900">{category.progress}%</span>
                      </div>
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredCategory === category.id ? 1 : 0, y: hoveredCategory === category.id ? 0 : 10 }}
                      className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-2 rounded-xl text-white bg-gradient-to-r ${category.color}
                          hover:shadow-lg transition-all duration-300`}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;