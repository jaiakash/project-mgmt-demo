// components/ProjectProgress.jsx
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BsThreeDots, BsCalendarEvent, BsArrowRight } from 'react-icons/bs';
import { HiOutlineChartBar } from 'react-icons/hi';
import { Modal } from './Modal';
import { projectProgressData } from './Modal';

const ProjectProgress = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDetailsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
      >
        <div className="relative">
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
                    Project Progress
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Timeline and milestones</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 cursor-pointer"
                  onClick={() => setIsFilterModalOpen(true)}
                >
                  <BsCalendarEvent className="text-gray-500" />
                  <span className="text-sm text-gray-600">Last 6 months</span>
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
                  {projectProgressData[0].months.map((month, i) => (
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
              {projectProgressData.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  onClick={() => handleTaskClick(item)}
                  className="group relative flex items-center mb-6 p-4 rounded-2xl hover:bg-gray-50 
                           transition-all duration-300 border border-transparent hover:border-gray-100 cursor-pointer"
                >
                  <div className="w-1/4 pr-6">
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-medium text-gray-700">{item.task}</h3>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-0.5 text-xs rounded-full ${item.status === 'Completed'
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
                          className={`h-full ${item.color}`}
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

      {/* Modals */}
      <Modal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title="Task Details"
      >
        {selectedTask && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{selectedTask.task}</h4>
              <span
                className={`px-2 py-1 text-sm rounded-full ${selectedTask.status === 'Completed'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-blue-50 text-blue-600'
                  }`}
              >
                {selectedTask.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium">{selectedTask.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedTask.progress}%` }}
                  className={`h-full ${selectedTask.color}`}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsDetailsModalOpen(false)}
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-xl
                       hover:bg-blue-600 transition-colors"
            >
              Close
            </motion.button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filter Options"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Date Range</label>
            <select className="w-full p-2 border rounded-xl">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>Custom range</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <div className="space-y-2">
              {['All', 'Completed', 'In Progress'].map((status) => (
                <label key={status} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFilterModalOpen(false)}
              className="flex-1 py-2 bg-gray-100 rounded-xl hover:bg-gray-200
                       transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFilterModalOpen(false)}
              className="flex-1 py-2 bg-blue-500 text-white rounded-xl
                       hover:bg-blue-600 transition-colors"
            >
              Apply
            </motion.button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectProgress;