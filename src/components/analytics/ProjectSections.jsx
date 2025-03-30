import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BsArrowRight, BsPlus, BsThreeDotsVertical } from 'react-icons/bs';
import RevenueSection from './RevenueSection';
import Modal from './Modal';

const ProjectSections = ({ projectCategories, categoryStyles }) => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <ProjectProgress onAddPhase={() => setActiveModal('addPhase')} />
      <RevenueSection />
      <ProjectCategories
        categories={projectCategories}
        styles={categoryStyles}
        onAddCategory={() => setActiveModal('addCategory')}
      />

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'addPhase'}
        onClose={() => setActiveModal(null)}
        title="Add New Phase"
      >
        <AddPhaseForm onClose={() => setActiveModal(null)} />
      </Modal>

      <Modal
        isOpen={activeModal === 'addCategory'}
        onClose={() => setActiveModal(null)}
        title="Add New Category"
      >
        <AddCategoryForm onClose={() => setActiveModal(null)} />
      </Modal>
    </>
  );
};

// Enhanced Project Progress Section
const ProjectProgress = ({ onAddPhase }) => {
  const phases = ['Research', 'Design', 'Development', 'Marketing'];
  const progressBars = [
    { width: '25%', color: 'from-blue-400 to-blue-500' },
    { width: '35%', color: 'from-purple-400 to-purple-500' },
    { width: '15%', color: 'from-pink-400 to-pink-500' },
    { width: '25%', color: 'from-orange-400 to-orange-500' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100 
      relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br 
        from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Project Progress</h2>
            <p className="text-gray-500 text-sm mt-1">Track your project milestones</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {phases.map((phase, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 
                  cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  {phase}
                </motion.span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAddPhase}
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 
              transition-colors"
            >
              <BsPlus className="text-xl" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="h-16 bg-gray-50 rounded-2xl overflow-hidden flex mb-4">
          {progressBars.map((bar, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: bar.width }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`h-full bg-gradient-to-r ${bar.color}`}
            />
          ))}
        </div>

        {/* Month Selection */}
        <div className="grid grid-cols-3 gap-6">
          {['February', 'March', 'April'].map((month, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2, scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 
              transition-all duration-300 group"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {month}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-700">2024</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Form Components for Modals
const AddPhaseForm = ({ onClose }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phase Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 
          focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          placeholder="Enter phase name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Duration (weeks)
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 
          focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          placeholder="Enter duration"
        />
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 
          transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 
          transition-colors"
        >
          Add Phase
        </button>
      </div>
    </form>
  );
};


// Enhanced Project Categories Section
const ProjectCategories = ({ categories, styles, onAddCategory }) => {
  const [, setActiveCategory] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
      relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br 
        from-indigo-50/30 to-purple-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr 
        from-blue-50/30 to-cyan-50/30 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 
              bg-clip-text text-transparent">Project Categories</h2>
            <p className="text-gray-500 text-sm mt-1">Overview of project distribution</p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAddCategory}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 
              text-indigo-600 hover:bg-indigo-100 transition-colors text-sm font-medium"
            >
              <BsPlus className="text-xl" />
              Add Category
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 
              text-gray-600 hover:bg-gray-100 transition-colors text-sm font-medium group"
            >
              See all
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              style={styles[index]}
              delay={index * 0.1}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        <QuickStats />
        <CategoryTags />
      </div>
    </motion.div>
  );
};

// Enhanced Category Card
const CategoryCard = ({ category, style, delay, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={onClick}
      className={`relative rounded-2xl p-6 cursor-pointer overflow-hidden
        bg-gradient-to-br ${style.gradient} border ${style.border}
        group hover:shadow-xl transition-all duration-300`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full 
        blur-2xl transform translate-x-16 -translate-y-16" />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-3xl transform transition-transform duration-300"
          >
            {category.icon}
          </motion.span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-white/90 px-2 py-1 rounded-full">
              {category.progress}%
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <BsThreeDotsVertical className="text-gray-600" />
            </motion.button>
          </div>
        </div>

        <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-gray-900">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700">
          {category.description}
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Active projects</span>
            <span className="font-medium text-gray-800">{category.activeProjects}</span>
          </div>
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${category.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${style.progress}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Quick Stats
const QuickStats = () => {
  const stats = [
    { label: 'Total Tasks', value: '234', icon: '📋', trend: '+12%' },
    { label: 'In Progress', value: '45', icon: '🔄', trend: '+5%' },
    { label: 'Completed', value: '189', icon: '✅', trend: '+18%' },
    { label: 'Success Rate', value: '94%', icon: '📈', trend: '+2%' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 
          hover:bg-gray-100/80 transition-colors group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {stat.icon}
          </span>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
              <span className="text-xs font-medium text-emerald-500 bg-emerald-50 
                px-1.5 py-0.5 rounded-full">
                {stat.trend}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Category Tags
const CategoryTags = () => {
  const tags = [
    { name: 'Research', count: 12 },
    { name: 'Strategy', count: 8 },
    { name: 'Operations', count: 15 },
    { name: 'Design', count: 24 },
    { name: 'Development', count: 31 }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {tags.map((tag, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 
          text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer 
          flex items-center gap-2 group"
        >
          #{tag.name}
          <span className="bg-gray-200 px-1.5 py-0.5 rounded-full text-gray-500 
            group-hover:bg-gray-300 transition-colors">
            {tag.count}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

// Add Category Form Component
const AddCategoryForm = ({ onClose }) => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 
          focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Enter category name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 
          focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Enter category description"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Icon
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 
          focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Enter emoji or icon"
        />
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 
          transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 
          transition-colors"
        >
          Add Category
        </button>
      </div>
    </form>
  );
};

export default ProjectSections;