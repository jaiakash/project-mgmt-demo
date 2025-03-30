// components/dashboard/UrgentTasks.jsx
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  BsCircle, BsCheckCircleFill, BsThreeDots, BsClock, BsPeople,
  BsBarChart, BsLink45Deg, BsCalendarEvent
} from 'react-icons/bs';
import {
  IoAdd, IoFlameOutline, IoTimeOutline, IoFlagOutline,
  IoDocumentTextOutline, IoPeopleOutline
} from 'react-icons/io5';
import {
  HiOutlineTrash, HiOutlinePencil, HiOutlineTag,
  HiOutlineChatAlt, HiOutlinePaperClip
} from 'react-icons/hi';

const UrgentTasks = ({ onAddTask }) => {
  const tasks = [
    {
      id: 1,
      title: "Finish monthly reporting",
      description: "Complete Q1 financial analysis and prepare presentation",
      deadline: "Today, 5:00 PM",
      priority: "high",
      completed: false,
      project: "Finance Q1",
      category: "Finance",
      assignees: [
        { id: 1, name: "John Doe", avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" },
        { id: 2, name: "Jane Smith", avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff" }
      ],
      tags: ["reporting", "finance", "quarterly"],
      progress: 65,
      comments: 8,
      attachments: 3,
      color: "blue",
      icon: <IoDocumentTextOutline />
    },
    {
      id: 2,
      title: "Client presentation review",
      description: "Review and finalize client presentation for tomorrow's meeting",
      deadline: "Today, 3:00 PM",
      priority: "high",
      completed: false,
      project: "Sales Pipeline",
      category: "Sales",
      assignees: [
        { id: 3, name: "Mike Johnson", avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=ec4899&color=fff" }
      ],
      tags: ["presentation", "client", "review"],
      progress: 80,
      comments: 5,
      attachments: 2,
      color: "purple",
      icon: <BsBarChart />
    },
    {
      id: 3,
      title: "Team sync meeting",
      description: "Weekly team sync to discuss project progress and blockers",
      deadline: "Today, 2:00 PM",
      priority: "medium",
      completed: false,
      project: "Team Management",
      category: "Internal",
      assignees: [
        { id: 4, name: "Sarah Wilson", avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=14b8a6&color=fff" },
        { id: 5, name: "Tom Brown", avatar: "https://ui-avatars.com/api/?name=Tom+Brown&background=f59e0b&color=fff" }
      ],
      tags: ["meeting", "team", "weekly"],
      progress: 0,
      comments: 3,
      attachments: 1,
      color: "green",
      icon: <IoPeopleOutline />
    }
  ];

  const [hoveredTask, setHoveredTask] = useState(null);

  const getPriorityStyle = (priority) => {
    const styles = {
      high: {
        color: "from-red-500 to-rose-500",
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-100",
        icon: <IoFlagOutline className="text-red-500" />
      },
      medium: {
        color: "from-orange-500 to-amber-500",
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-100",
        icon: <IoFlagOutline className="text-orange-500" />
      },
      low: {
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-100",
        icon: <IoFlagOutline className="text-green-500" />
      }
    };
    return styles[priority] || styles.medium;
  };

  const TaskTag = ({ tag }) => (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg"
    >
      {tag}
    </motion.span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      {/* ... Header section remains the same ... */}

      {/* Tasks List */}
      <motion.div layout className="space-y-4">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onHoverStart={() => setHoveredTask(task.id)}
              onHoverEnd={() => setHoveredTask(null)}
              className="group relative p-6 rounded-2xl border border-gray-100 hover:shadow-lg 
                hover:shadow-gray-100/50 transition-all duration-300"
            >
              {/* Priority indicator */}
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl 
                bg-gradient-to-r ${getPriorityStyle(task.priority).color} opacity-50`}
              />

              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`mt-1 transition-colors duration-300 
                    ${task.completed ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}`}
                >
                  {task.completed ? <BsCheckCircleFill size={24} /> : <BsCircle size={24} />}
                </motion.button>

                {/* Task Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className={`font-medium text-lg transition-colors duration-200 
                        ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{task.description}</p>
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredTask === task.id ? 1 : 0 }}
                      className="flex items-center gap-2"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-blue-500"
                      >
                        <HiOutlinePencil size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-red-500"
                      >
                        <HiOutlineTrash size={18} />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Task Details */}
                  <div className="mt-4 flex items-center gap-6">
                    {/* Project & Category */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full bg-${task.color}-500`} />
                      <span className="text-gray-600">{task.project}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600">{task.category}</span>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-2 text-sm">
                      <IoTimeOutline className="text-gray-400" />
                      <span className="text-gray-600">{task.deadline}</span>
                    </div>

                    {/* Priority */}
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${getPriorityStyle(task.priority).bg}`}>
                      {getPriorityStyle(task.priority).icon}
                      <span className={`text-sm font-medium ${getPriorityStyle(task.priority).text}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex items-center gap-2">
                    <HiOutlineTag className="text-gray-400" />
                    {task.tags.map((tag, index) => (
                      <TaskTag key={index} tag={tag} />
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between">
                    {/* Assignees */}
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {task.assignees.map((assignee) => (
                          <motion.img
                            key={assignee.id}
                            whileHover={{ scale: 1.2, zIndex: 1 }}
                            src={assignee.avatar}
                            alt={assignee.name}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            title={assignee.name}
                          />
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <IoAdd size={16} className="text-gray-600" />
                      </motion.button>
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <HiOutlineChatAlt />
                        <span>{task.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiOutlinePaperClip />
                        <span>{task.attachments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsBarChart />
                        <span>{task.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Add Task Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={onAddTask}
          className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-200 
            text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50
            transition-all duration-300 flex items-center justify-center gap-2"
        >
          <IoAdd size={20} />
          <span>Add new task</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default UrgentTasks;