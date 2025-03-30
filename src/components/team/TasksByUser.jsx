// components/team/TasksByUser.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiOutlineCalendar, HiOutlineClock, HiPlus } from 'react-icons/hi';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';

const TasksByUser = ({ userTasks, onTaskSelect }) => {
  const getStatusStyle = (status) => {
    const styles = {
      'Not started': 'text-purple-600 bg-purple-50/50 border-purple-100',
      'In progress': 'text-blue-600 bg-blue-50/50 border-blue-100',
      'Paused': 'text-gray-600 bg-gray-50/50 border-gray-100',
      'Completed': 'text-green-600 bg-green-50/50 border-green-100'
    };
    return styles[status] || '';
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      'High priority': 'text-red-600 bg-red-50/50 border-red-100',
      'Medium priority': 'text-orange-600 bg-orange-50/50 border-orange-100',
      'Low priority': 'text-green-600 bg-green-50/50 border-green-100'
    };
    return styles[priority] || '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Tasks by user
              </h2>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {userTasks.reduce((acc, user) => acc + user.tasks.length, 0)} tasks
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-xl
              hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20"
            >
              <HiPlus size={20} />
              <span>Add Task</span>
            </motion.button>
          </div>

          {/* Tasks List */}
          <div className="space-y-8">
            {userTasks.map((userTask, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={userTask.avatar}
                      alt={userTask.user}
                      className="w-10 h-10 rounded-xl ring-4 ring-gray-50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{userTask.user}'s tasks</h3>
                    <p className="text-sm text-gray-500">{userTask.tasks.length} active tasks</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {userTask.tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      whileHover={{ scale: 1.01 }}
                      className="group relative bg-white p-4 rounded-2xl border border-gray-100 
                      hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 cursor-pointer"
                      onClick={() => onTaskSelect(task)}
                    >
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-purple-500 transition-colors"
                        >
                          {task.completed ? (
                            <BsCheckCircle size={24} className="text-purple-500" />
                          ) : (
                            <BsCircle size={24} />
                          )}
                        </motion.button>

                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <span className={`text-gray-900 font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                              {task.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <HiOutlineCalendar />
                                <span>{task.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(task.status)}`}>
                              {task.status}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityStyle(task.priority)}`}>
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: task.progress || '0%' }}
                          className="h-full bg-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TasksByUser;