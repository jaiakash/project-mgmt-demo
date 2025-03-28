// components/dashboard/UrgentTasks.jsx
import { useState } from 'react';
import { BsCircle, BsCheckCircleFill, BsThreeDots } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';

const UrgentTasks = ({ onAddTask }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish monthly reporting",
      deadline: "Today",
      priority: "high",
      completed: false,
      project: "Finance Q1"
    },
    {
      id: 2,
      title: "Report signing",
      deadline: "Today",
      priority: "medium",
      completed: false,
      project: "Legal Docs"
    },
    {
      id: 3,
      title: "Market overview keynote",
      deadline: "Today",
      priority: "high",
      completed: false,
      project: "Marketing"
    }
  ]);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-50 text-red-600",
      medium: "bg-orange-50 text-orange-600",
      low: "bg-green-50 text-green-600"
    };
    return colors[priority] || colors.medium;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-[#1a1f36]">Urgent tasks</h2>
          <span className="px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
            {tasks.filter(t => !t.completed).length} pending
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <BsThreeDots size={20} />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`group p-4 rounded-xl transition-all duration-200 
              ${task.completed ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => toggleTask(task.id)}
                className={`mt-1 transition-colors duration-200 
                  ${task.completed ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}`}
              >
                {task.completed ? <BsCheckCircleFill size={20} /> : <BsCircle size={20} />}
              </button>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium transition-colors duration-200 
                    ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                    {task.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full 
                    ${getPriorityColor(task.priority)}`}>
                    {task.deadline}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mt-1">{task.project}</p>
                
                <div className="mt-2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                    Edit
                  </button>
                  <button className="text-xs text-red-500 hover:text-red-600 font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={onAddTask} className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-gray-200 
          text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all duration-200 
          flex items-center justify-center gap-2">
          <IoAdd size={20} />
          <span>Add new task</span>
        </button>
      </div>
    </div>
  );
};

export default UrgentTasks;