// components/team/TeamDirectory.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BsPlus, BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineChat, HiOutlineUserAdd } from 'react-icons/hi';
import { RiTaskLine, RiFolderLine } from 'react-icons/ri';

const TeamDirectory = ({ teamMembers, onMemberSelect }) => {
  const getStatusColor = (status) => {
    const colors = {
      'online': 'bg-green-500',
      'offline': 'bg-gray-300',
      'busy': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-300';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-blue-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Team directory
              </h2>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {teamMembers.length} members
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl
              hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
            >
              <HiOutlineUserAdd size={20} />
              <span>Add member</span>
            </motion.button>
          </div>

          {/* Team Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white border border-gray-100 
                hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300 cursor-pointer"
                onClick={() => onMemberSelect(member)}
              >
                {/* Status indicator line */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r 
                  ${member.status === 'online' ? 'from-green-400 to-green-500' :
                    member.status === 'busy' ? 'from-red-400 to-red-500' : 'from-gray-200 to-gray-300'} 
                  opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex items-start gap-4">
                  {/* Avatar Section */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-xl ring-4 ring-gray-50"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white
                        ${getStatusColor(member.status)} ring-2 ring-${member.status === 'online' ? 'green' : 
                        member.status === 'busy' ? 'red' : 'gray'}-100`}
                    />
                  </motion.div>

                  {/* Info Section */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <BsThreeDotsVertical className="text-gray-400" />
                      </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                        <RiTaskLine className="text-gray-400" />
                        <span className="text-sm text-gray-600">{member.tasks} tasks</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                        <RiFolderLine className="text-gray-400" />
                        <span className="text-sm text-gray-600">{member.projects} projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute right-4 bottom-4 bg-white shadow-lg rounded-xl p-1"
                >
                  <div className="flex items-center gap-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                    >
                      <HiOutlineMail className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                    >
                      <HiOutlineChat className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamDirectory;