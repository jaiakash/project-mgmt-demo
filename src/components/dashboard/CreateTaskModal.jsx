// components/modals/CreateTaskModal.jsx
const CreateTaskModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 
      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}>
      <div className="bg-white rounded-2xl p-6 w-[500px] shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create new task</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        
        {/* Task Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Task title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
              <option>Market research 2024</option>
              <option>New proposals</option>
              <option>Brand sprints</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due date</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <div className="flex gap-3">
              {['Low', 'Medium', 'High'].map((priority) => (
                <button
                  key={priority}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium
                    ${priority === 'High' 
                      ? 'bg-red-50 text-red-600 border-red-200' 
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                >
                  {priority}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              rows="4"
              placeholder="Task description"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Create task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;