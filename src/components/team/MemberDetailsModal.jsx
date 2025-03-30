// components/team/MemberDetailsModal.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MemberDetailsModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl p-6 w-[480px] max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500">Tasks</p>
              <p className="text-2xl font-semibold text-gray-800">{member.tasks}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500">Projects</p>
              <p className="text-2xl font-semibold text-gray-800">{member.projects}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-800">{member.email}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Department</span>
              <span className="text-gray-800">{member.department}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Joined</span>
              <span className="text-gray-800">
                {new Date(member.joinedDate).toLocaleDateString()}
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
      </motion.div>
    </div>
  );
};

export default MemberDetailsModal;

