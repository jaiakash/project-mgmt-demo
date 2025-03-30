// components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineSetting
} from 'react-icons/ai';
import {
  BsCalendar3,
  BsPeople
} from 'react-icons/bs';
import {
  BiPieChartAlt
} from 'react-icons/bi';
import {
  IoAddOutline,
  IoExitOutline
} from 'react-icons/io5';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <AiOutlineHome size={22} />,
      path: '/',
      tooltip: 'Dashboard'
    },
    {
      icon: <BsPeople size={22} />,
      path: '/team',
      tooltip: 'Team'
    },
    {
      icon: <BiPieChartAlt size={22} />,
      path: '/analytics',
      tooltip: 'Analytics'
    },
    {

      icon: <AiOutlineSetting size={22} />,
      path: '/settings',
      tooltip: 'Settings'
    }
  ];

  return (
    <div className="fixed left-0 h-screen w-16 bg-[#1a1f36] flex flex-col items-center py-6 z-50 group">
      <div className="flex flex-col items-center gap-6">
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ease-in-out relative
              ${location.pathname === item.path
                ? 'bg-white/20 text-white'
                : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
          >
            {item.icon}
            <div className="absolute left-full ml-2 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg 
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.tooltip}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-xl text-white/60 
            hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <IoExitOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;