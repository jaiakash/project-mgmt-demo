import { BiSearch } from 'react-icons/bi';
import { BsBarChartLine } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Research",
      icon: <BiSearch size={20} />,
      color: "bg-pink-50",
      textColor: "text-pink-600",
      iconColor: "text-pink-500",
      tag: "#Research"
    },
    {
      id: 2,
      name: "Strategy",
      icon: <BsBarChartLine size={20} />,
      color: "bg-green-50",
      textColor: "text-green-600",
      iconColor: "text-green-500",
      tag: "#Strategy"
    },
    {
      id: 3,
      name: "Operations",
      icon: <AiOutlineSetting size={20} />,
      color: "bg-yellow-50",
      textColor: "text-yellow-600",
      iconColor: "text-yellow-500",
      tag: "#Operations"
    },
    {
      id: 4,
      name: "Customers",
      icon: <HiOutlineUserGroup size={20} />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      iconColor: "text-blue-500",
      tag: "#Customers"
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Project categories</h2>
        <button className="text-gray-600 hover:text-gray-800 text-sm">
          See more →
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.color} rounded-xl p-4 cursor-pointer transition-all hover:shadow-md`}
          >
            <div className={`${category.iconColor} mb-3`}>
              {category.icon}
            </div>
            <h3 className={`${category.textColor} font-medium mb-1`}>
              {category.name}
            </h3>
            <p className={`${category.textColor} text-sm opacity-75`}>
              {category.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;