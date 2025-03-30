// components/Modal.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiOutlineCalendar, HiOutlineClock, HiPlus, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { BsCheckCircle, BsCircle, BsThreeDots } from 'react-icons/bs';

const TasksByUser = ({ userTasks: initialUserTasks }) => {
  const Modal = ({ isOpen, onClose, title, children }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                       bg-white rounded-2xl p-6 shadow-xl w-full max-w-md"
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  const [userTasks, setUserTasks] = useState(initialUserTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  };

  const toggleTaskCompletion = (taskId) => {
    setUserTasks(prevTasks =>
      prevTasks.map(user => ({
        ...user,
        tasks: user.tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      }))
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 rounded-3xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Tasks by user
                </h2>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {userTasks.reduce((acc, user) => acc + user.tasks.length, 0)} tasks
                </motion.span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsNewTaskModalOpen(true)}
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
                        hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleTaskCompletion(task.id)}
                            className="text-gray-400 hover:text-purple-500 transition-colors"
                          >
                            {task.completed ? (
                              <BsCheckCircle size={24} className="text-purple-500" />
                            ) : (
                              <BsCircle size={24} />
                            )}
                          </motion.button>

                          <div className="flex-1" onClick={() => handleTaskClick(task)}>
                            <div className="flex items-start justify-between">
                              <span className={`text-gray-900 font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                                {task.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <HiOutlineCalendar />
                                  <span>{task.date}</span>
                                </div>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedTask(task);
                                    setIsDeleteModalOpen(true);
                                  }}
                                >
                                  <BsThreeDots className="text-gray-400 hover:text-gray-600" />
                                </motion.button>
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
                            animate={{ width: task.progress }}
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

      {/* Task Details Modal */}
      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        title="Task Details"
      >
        {selectedTask && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{selectedTask.name}</h4>
              <span className={`px-2 py-1 text-sm rounded-full ${getStatusStyle(selectedTask.status)}`}>
                {selectedTask.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium">{selectedTask.progress}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: selectedTask.progress }}
                  className="h-full bg-purple-500"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsTaskModalOpen(false)}
                className="flex-1 py-2 bg-gray-100 rounded-xl hover:bg-gray-200
                         transition-colors"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-2 bg-purple-500 text-white rounded-xl
                         hover:bg-purple-600 transition-colors"
              >
                Edit Task
              </motion.button>
            </div>
          </div>
        )}
      </Modal>

      {/* New Task Modal */}
      <Modal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        title="Add New Task"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter task name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Not started</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Low priority</option>
              <option>Medium priority</option>
              <option>High priority</option>
            </select>
          </div>

          <div className="flex gap-2 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsNewTaskModalOpen(false)}
              className="flex-1 py-2 bg-gray-100 rounded-xl hover:bg-gray-200
                       transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2 bg-purple-500 text-white rounded-xl
                       hover:bg-purple-600 transition-colors"
            >
              Add Task
            </motion.button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Task"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Are you sure you want to delete this task? This action cannot be undone.
          </p>

          <div className="flex gap-2 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsDeleteModalOpen(false)}
              className="flex-1 py-2 bg-gray-100 rounded-xl hover:bg-gray-200
                       transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-2 bg-red-500 text-white rounded-xl
                       hover:bg-red-600 transition-colors"
            >
              Delete
            </motion.button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TasksByUser;