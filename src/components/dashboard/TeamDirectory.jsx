// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiOutlineUserGroup, HiOutlineViewGrid, HiOutlineMail, HiOutlineChat } from 'react-icons/hi';
import { RiTaskLine, RiFolderLine } from 'react-icons/ri';

const TeamDirectory = () => {
  const team = [
    {
      id: 1,
      name: "Dana R.",
      role: "Project Manager",
      projects: 12,
      tasks: 42,
      status: "online"
    },
    {
      id: 2,
      name: "Elon S.",
      role: "Key Account Planner",
      projects: 8,
      tasks: 24,
      status: "offline"
    },
    {
      id: 3,
      name: "Nancy W.",
      role: "Account Manager",
      projects: 10,
      tasks: 31,
      status: "online"
    },
    {
      id: 4,
      name: "James M.",
      role: "Digital Manager",
      projects: 6,
      tasks: 18,
      status: "online"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      className="mt-8 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/20"
    >
      <div className="relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 rounded-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl">
                <HiOutlineUserGroup className="text-2xl text-indigo-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Team directory
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {team.length} team members
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 flex items-center gap-2 text-indigo-500 hover:bg-indigo-50 rounded-xl transition-colors"
              onClick={() => window.location.href = '/team'}
            >
              <HiOutlineViewGrid className="text-lg" />
              <span>View all</span>
            </motion.button>
          </div>

          {/* Team Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-2xl border border-gray-100 
                hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 
                      flex items-center justify-center text-white text-lg font-medium ring-4 ring-indigo-50">
                      {member.name.split(' ')[0][0]}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white
                      ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}
                      ring-2 ${member.status === 'online' ? 'ring-green-100' : 'ring-gray-100'}`}
                    />
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>

                      {/* Quick Actions */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="flex items-center gap-1"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <HiOutlineMail size={18} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <HiOutlineChat size={18} />
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 px-2 py-1.5 bg-gray-50 rounded-lg">
                        <RiFolderLine className="text-gray-400" />
                        <span className="text-sm">
                          <span className="font-medium text-gray-700">{member.projects}</span>
                          <span className="text-gray-500 ml-1">projects</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 rounded-lg">
                        <RiTaskLine className="text-gray-400" />
                        <span className="text-sm">
                          <span className="font-medium text-gray-700">{member.tasks}</span>
                          <span className="text-gray-500 ml-1">tasks</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamDirectory;