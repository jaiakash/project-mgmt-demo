import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiPieChartAlt } from "react-icons/bi";
import { IoAddOutline, IoExitOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    { icon: <AiOutlineHome size={24} />, active: true },
    { icon: <BsCalendar3 size={22} /> },
    { icon: <HiOutlineUserGroup size={24} /> },
    { icon: <BiPieChartAlt size={24} /> },
    { icon: <IoAddOutline size={24} /> },
    { icon: <FiSettings size={24} /> },
    { icon: <IoExitOutline size={24} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[#1a1f36] flex flex-col justify-between items-center py-6">
      {/* Menu Items */}
      <div className="flex flex-col items-center gap-6 w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 w-full flex justify-center rounded-lg hover:bg-white/10 transition-colors ${
              item.active ? "bg-white/10" : ""
            }`}
          >
            <span className="text-white/60 hover:text-white">{item.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
