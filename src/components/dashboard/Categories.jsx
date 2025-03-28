// components/dashboard/Categories.jsx
import { BiSearch, BiBarChartAlt2 } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Research",
      icon: <BiSearch size={24} />,
      description: "Market analysis & data",
      stats: { total: 24, active: 12 },
      color: "from-orange-500/10 to-pink-500/10",
      iconColor: "text-orange-500",
      progress: 65
    },
    {
      id: 2,
      name: "Strategy",
      icon: <BiBarChartAlt2 size={24} />,
      description: "Business planning",
      stats: { total: 16, active: 8 },
      color: "from-emerald-500/10 to-green-500/10",
      iconColor: "text-emerald-500",
      progress: 72
    },
    {
      id: 3,
      name: "Operations",
      icon: <AiOutlineSetting size={24} />,
      description: "Process optimization",
      stats: { total: 32, active: 18 },
      color: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-500",
      progress: 45
    },
    {
      id: 4,
      name: "Customers",
      icon: <HiOutlineUserGroup size={24} />,
      description: "Client relationships",
      stats: { total: 28, active: 15 },
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-500",
      progress: 58
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#1a1f36]">Project categories</h2>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <span className="text-sm">See all categories</span>
          <BsArrowRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer 
              transition-all duration-300 hover:shadow-lg group`}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} 
              opacity-70 group-hover:opacity-100 transition-opacity duration-300`} 
            />
            
            {/* Content */}
            <div className="relative">
              <div className={`${category.iconColor} mb-4 
                transform group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-[#1a1f36] font-semibold mb-1">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              
              {/* Progress bar */}
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full rounded-full bg-${category.iconColor.split('-')[1]} 
                    transition-all duration-500 ease-out`}
                  style={{ width: `${category.progress}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">
                  {category.stats.active} active projects
                </span>
                <span className="font-medium text-[#1a1f36]">
                  {category.progress}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;