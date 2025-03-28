// pages/TeamPage.tsx
import { useState } from 'react';
import { BsThreeDots, BsPlus } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineChat } from 'react-icons/hi';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const projectProgress = [
    {
      task: 'Resources check',
      months: ['January', 'February', 'March', 'April', 'May', 'June'],
      timeline: [0, 1, 1, 0, 0, 0],
      color: 'bg-orange-200',
      progress: 65,
      status: 'In Progress'
    },
    {
      task: 'Participants',
      timeline: [0, 0, 1, 1, 0, 0],
      color: 'bg-blue-200',
      progress: 45,
      status: 'In Progress'
    },
    {
      task: 'SWOT analysis',
      timeline: [0, 0, 0, 1, 1, 0],
      color: 'bg-emerald-200',
      progress: 80,
      status: 'Completed'
    },
    {
      task: 'Design research',
      timeline: [0, 0, 0, 1, 1, 1],
      color: 'bg-purple-200',
      progress: 30,
      status: 'In Progress'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dana R.",
      role: "Project Manager",
      avatar: "https://ui-avatars.com/api/?name=Dana+R&background=random",
      status: 'online',
      tasks: 12,
      projects: 4,
      email: "dana.r@company.com",
      department: "Management",
      joinedDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Elon S.",
      role: "Key Account Planner",
      avatar: "https://ui-avatars.com/api/?name=Elon+S&background=random",
      status: 'busy',
      tasks: 8,
      projects: 3,
      email: "elon.s@company.com",
      department: "Sales",
      joinedDate: "2023-03-20"
    },
    {
      id: 3,
      name: "Nancy W.",
      role: "Account Manager",
      avatar: "https://ui-avatars.com/api/?name=Nancy+W&background=random",
      status: 'online',
      tasks: 10,
      projects: 5,
      email: "nancy.w@company.com",
      department: "Sales",
      joinedDate: "2023-02-01"
    },
    {
      id: 4,
      name: "James M.",
      role: "Digital Manager",
      avatar: "https://ui-avatars.com/api/?name=James+M&background=random",
      status: 'offline',
      tasks: 6,
      projects: 2,
      email: "james.m@company.com",
      department: "Digital",
      joinedDate: "2023-04-10"
    }
  ];

  const userTasks = [
    {
      user: "Dana",
      avatar: "https://ui-avatars.com/api/?name=Dana+R&background=random",
      tasks: [
        {
          id: 1,
          name: "Research check-in",
          date: "Today",
          status: "Not started",
          priority: "High priority"
        },
        {
          id: 2,
          name: "Survey design",
          date: "Tomorrow",
          status: "In progress",
          priority: "Medium priority"
        },
        {
          id: 3,
          name: "Idea sprint",
          date: "Friday",
          status: "In progress",
          priority: "High priority"
        }
      ]
    },
    {
      user: "Elon",
      avatar: "https://ui-avatars.com/api/?name=Elon+S&background=random",
      tasks: [
        {
          id: 4,
          name: "Market analysis",
          date: "Today",
          status: "Not started",
          priority: "High priority"
        },
        {
          id: 5,
          name: "Surveys evaluation",
          date: "Thursday",
          status: "In progress",
          priority: "Medium priority"
        },
        {
          id: 6,
          name: "B2B Research",
          date: "Friday",
          status: "Paused",
          priority: "Low priority"
        }
      ]
    }
  ];
  // Helper functions
  const getStatusColor = (status) => {
    const colors = {
      'online': 'bg-green-500',
      'offline': 'bg-gray-300',
      'busy': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-300';
  };

  const getPriorityStyle = (priority) => {
    const styles = {
      'High priority': 'text-red-600 bg-red-50 border-red-100',
      'Medium priority': 'text-orange-600 bg-orange-50 border-orange-100',
      'Low priority': 'text-green-600 bg-green-50 border-green-100'
    };
    return styles[priority] || '';
  };

  const getStatusStyle = (status) => {
    const styles = {
      'Not started': 'text-purple-600 bg-purple-50 border-purple-100',
      'In progress': 'text-blue-600 bg-blue-50 border-blue-100',
      'Paused': 'text-gray-600 bg-gray-50 border-gray-100',
      'Completed': 'text-green-600 bg-green-50 border-green-100'
    };
    return styles[status] || '';
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">
                Market research 2024
              </h1>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Started: Jan 15, 2024</span>
              <span>•</span>
              <span>Due: Jun 30, 2024</span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 3).map((member) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span>{teamMembers.length} members</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              Share
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Edit Project
            </button>
          </div>
        </div>
      </div>

      {/* Project Progress */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Project progress</h2>
          <div className="flex items-center gap-3">
            <select className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-white">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
            <button className="p-1.5 hover:bg-gray-50 rounded-lg transition-colors">
              <BsThreeDots size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Timeline Header */}
          <div className="flex mb-6">
            <div className="w-1/4"></div>
            <div className="flex-1 grid grid-cols-6">
              {projectProgress[0].months.map((month, i) => (
                <div key={i} className="text-sm text-gray-600 font-medium">
                  {month}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Items */}
          {projectProgress.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-6 group hover:bg-gray-50 p-3 rounded-xl transition-colors"
            >
              <div className="w-1/4">
                <h3 className="text-sm font-medium text-gray-700">{item.task}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{item.progress}%</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-6 gap-2">
                {item.timeline.map((active, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-lg transition-all duration-300 
                      ${active ? item.color : 'bg-gray-100'} 
                      ${active ? 'hover:opacity-80 cursor-pointer' : 'hover:bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team and Tasks Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Team Directory */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Team directory</h2>
            <button
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <BsPlus size={20} />
              <span>Add member</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white
                        ${getStatusColor(member.status)}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span>{member.tasks} tasks</span>
                      <span>{member.projects} projects</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                      <HiOutlineMail size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
                      <HiOutlineChat size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tasks Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Task by user</h2>
          {userTasks.map((userTask, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={userTask.avatar}
                  alt={userTask.user}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-gray-700">
                  {userTask.user}'s responsibilities
                </span>
              </div>

              <div className="space-y-3">
                {userTask.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setSelectedTask(task)}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-full border-2 border-gray-300 
                          checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {task.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{task.date}</span>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getStatusStyle(task.status)}`}>
                        {task.status}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityStyle(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[480px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{selectedMember.name}</h3>
                  <p className="text-gray-500">{selectedMember.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">Tasks</p>
                  <p className="text-2xl font-semibold text-gray-800">{selectedMember.tasks}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-500">Projects</p>
                  <p className="text-2xl font-semibold text-gray-800">{selectedMember.projects}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Email</span>
                  <span className="text-gray-800">{selectedMember.email}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Department</span>
                  <span className="text-gray-800">{selectedMember.department}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Joined</span>
                  <span className="text-gray-800">
                    {new Date(selectedMember.joinedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Message
                </button>
                <button className="flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[480px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{selectedTask.name}</h3>
              <button
                onClick={() => setSelectedTask(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <span className={`text-xs px-2 py-1 rounded-full border ${getStatusStyle(selectedTask.status)}`}>
                  {selectedTask.status}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityStyle(selectedTask.priority)}`}>
                  {selectedTask.priority}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Due Date</span>
                  <span className="text-gray-800">{selectedTask.date}</span>
                </div>
                {/* Add more task details here */}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;