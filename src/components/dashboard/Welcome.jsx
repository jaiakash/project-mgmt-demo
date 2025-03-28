// components/dashboard/Welcome.jsx
import { IoSearchOutline } from 'react-icons/io5';

const Welcome = () => {
  return (
    <div className="flex justify-between items-center mb-8 bg-white rounded-2xl p-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-[#1a1f36]">Welcome, Juliana!</h1>
        <p className="text-gray-500 mt-1">Here is your agenda for today</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2.5 pl-11 bg-gray-50 rounded-xl 
                     border border-gray-200 focus:border-blue-300 
                     focus:ring-2 focus:ring-blue-100 outline-none
                     transition-all duration-200"
          />
          <IoSearchOutline 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 
                       group-hover:text-gray-600 transition-colors duration-200" 
            size={20}
          />
        </div>
        
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-100 hover:ring-4 transition-all duration-200 cursor-pointer">
            <img
              src="https://ui-avatars.com/api/?name=Juliana&background=random"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;