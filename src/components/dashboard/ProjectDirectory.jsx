// components/dashboard/ProjectDirectory.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronForward, IoFolderOpen, IoAdd, IoCalendarOutline } from 'react-icons/io5';
import { BsThreeDots, BsPeople, BsBarChart } from 'react-icons/bs';
import { useState } from 'react';

const ProjectDirectory = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      name: "Market research 2024",
      category: "Research",
      progress: 75,
      status: "Active",
      dueDate: "Mar 15, 2024",
      members: [
        { id: 1, avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" },
        { id: 2, avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=8b5cf6&color=fff" }
      ],
      description: "Comprehensive market analysis for Q1 2024"
    },
    {
      id: 2,
      name: "New proposals",
      category: "Strategy",
      progress: 45,
      status: "Review",
      dueDate: "Feb 28, 2024",
      members: [
        { id: 3, avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=ec4899&color=fff" }
      ],
      description: "Client proposal drafts and reviews"
    },
    {
      id: 3,
      name: "Brand sprints",
      category: "Design",
      progress: 90,
      status: "Active",
      dueDate: "Mar 1, 2024",
      members: [
        { id: 1, avatar: "https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" },
        { id: 4, avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=14b8a6&color=fff" }
      ],
      description: "Brand identity workshop and design sprints"
    }
  ];

  const categories = ['All', 'Research', 'Strategy', 'Design'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <IoFolderOpen className="text-2xl text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Project directory
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {projects.length} active projects
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 flex items-center gap-2 bg-blue-500 text-white rounded-xl
              hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
            >
              <IoAdd size={20} />
              <span>Add project</span>
            </motion.button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 
                  ${selectedCategory === category 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects List */}
          <motion.div layout className="space-y-4">
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative p-6 rounded-2xl border border-gray-100 hover:shadow-lg 
                    hover:shadow-gray-100/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ rotate: hoveredProject === project.id ? 90 : 0 }}
                        className="mt-1"
                      >
                        <IoChevronForward className="text-gray-400 group-hover:text-blue-500" size={20} />
                      </motion.div>
                      <div>
                        <h3 className="font-medium text-gray-900">{project.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">{project.category}</span>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <IoCalendarOutline />
                            <span>Due {project.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-6">
                      {/* Progress */}
                      <div className="flex items-center gap-3">
                        <BsBarChart className="text-gray-400" />
                        <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
                      </div>

                      {/* Team Members */}
                      <div className="flex items-center gap-2">
                        <BsPeople className="text-gray-400" />
                        <div className="flex -space-x-2">
                          {project.members.map((member) => (
                            <motion.img
                              key={member.id}
                              whileHover={{ scale: 1.2, zIndex: 1 }}
                              src={member.avatar}
                              alt="Team member"
                              className="w-8 h-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          project.status === 'Active'
                            ? 'bg-green-50 text-green-600'
                            : 'bg-yellow-50 text-yellow-600'
                        }`}
                      >
                        {project.status}
                      </motion.span>

                      {/* Actions */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <BsThreeDots size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDirectory;