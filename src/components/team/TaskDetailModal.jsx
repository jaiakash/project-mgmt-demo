// components/team/TaskDetailsModal.jsx
const TaskDetailsModal = ({ task, onClose }) => {
  if (!task) return null;

  const getStatusStyle = (status) => {
    const styles = {
      'Not started': 'text-purple-600 bg-purple-50 border-purple-100',
      'In progress': 'text-blue-600 bg-blue-50 border-blue-100',
      'Paused': 'text-gray-600 bg-gray-50 border-gray-100',
      'Completed': 'text-green-600 bg-green-50 border-green-100'
    };
    return styles[status] || '';
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      'High priority': 'text-red-600 bg-red-50 border-red-100',
      'Medium priority': 'text-orange-600 bg-orange-50 border-orange-100',
      'Low priority': 'text-green-600 bg-green-50 border-green-100'
    };
    return styles[priority] || '';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl p-6 w-[480px]"
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-semibold text-gray-800">{task.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusStyle(task.status)}`}>
              {task.status}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityStyle(task.priority)}`}>
              {task.priority}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Due Date</span>
              <span className="text-gray-800">{task.date}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
              <p className="text-gray-600 text-sm">
                {task.description || 'No description provided.'}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Checklist</h4>
              <div className="space-y-2">
                {/* Example checklist items */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span className="text-sm text-gray-600">Review requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-500" />
                  <span className="text-sm text-gray-600">Create timeline</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Edit Task
            </button>
            <button className="flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Mark Complete
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskDetailsModal;