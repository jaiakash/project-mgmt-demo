// components/layout/Sidebar.jsx
import { AiOutlineHome } from 'react-icons/ai';
import { BsCalendar3 } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiPieChartAlt } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';

const Sidebar = () => {
  const menuItems = [
    { icon: <AiOutlineHome size={22} />, active: true },
    { icon: <BsCalendar3 size={20} /> },
    { icon: <HiOutlineUserGroup size={22} /> },
    { icon: <BiPieChartAlt size={22} /> },
    { icon: <IoAddOutline size={22} /> },
  ];

  return (
    <div className="fixed left-0 h-screen w-16 bg-[#1a1f36] flex flex-col items-center py-6 z-50">
      <div className="flex flex-col items-center gap-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ease-in-out
              ${item.active 
                ? 'bg-white/20 text-white' 
                : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
      
      <div className="mt-auto flex flex-col gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200">
          <FiSettings size={22} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all duration-200">
          <IoExitOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;