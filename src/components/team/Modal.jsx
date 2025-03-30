// components/Modal.jsx
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
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

// data/projectProgressData.js
export const projectProgressData = [
  {
    task: "Website Redesign",
    status: "Completed",
    progress: 100,
    color: "bg-blue-500",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    timeline: [true, true, true, false, false, false]
  },
  {
    task: "Mobile App Development",
    status: "In Progress",
    progress: 60,
    color: "bg-purple-500",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    timeline: [false, true, true, true, false, false]
  },
  {
    task: "Marketing Campaign",
    status: "In Progress",
    progress: 30,
    color: "bg-green-500",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    timeline: [false, false, true, true, true, false]
  }
];