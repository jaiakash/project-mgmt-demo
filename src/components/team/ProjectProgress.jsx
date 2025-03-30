// components/team/ProjectProgress.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BsThreeDots, BsCalendarEvent, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChartBar } from 'react-icons/hi';

const ProjectProgress = ({ projectProgress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <HiOutlineChartBar className="text-2xl text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Project progress
                </h2>
                <p className="text-sm text-gray-500 mt-1">Timeline and milestones</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100"
              >
                <BsCalendarEvent className="text-gray-500" />
                <select className="bg-transparent text-sm text-gray-600 focus:outline-none">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <BsThreeDots size={24} className="text-gray-400" />
              </motion.button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Header */}
            <div className="flex mb-8">
              <div className="w-1/4"></div>
              <div className="flex-1 grid grid-cols-6">
                {projectProgress[0].months.map((month, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="text-sm font-medium text-gray-500 px-2"
                  >
                    {month}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline Items */}
            {projectProgress.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="group relative flex items-center mb-6 p-4 rounded-2xl hover:bg-gray-50 
                transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-1/4 pr-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-medium text-gray-700">{item.task}</h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        item.status === 'Completed' 
                          ? 'bg-green-50 text-green-600'
                          : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      {item.status}
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${item.color} transition-all duration-500`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.progress}%</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-6 gap-3">
                  {item.timeline.map((active, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: active ? 1.05 : 1 }}
                      className={`relative h-10 rounded-xl transition-all duration-300 
                        ${active ? item.color : 'bg-gray-100'} 
                        ${active ? 'hover:shadow-lg cursor-pointer' : 'hover:bg-gray-200'}`}
                    >
                      {active && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full 
                          border-2 border-blue-500"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-4 opacity-0 group-hover:opacity-100"
                >
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <BsArrowRight className="text-gray-400" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectProgress;