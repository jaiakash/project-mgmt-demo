import { IoSearchOutline } from 'react-icons/io5';

const Welcome = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-[#1a1f36]">Welcome, Juliana!</h1>
        <p className="text-gray-500 mt-1">Here is your agenda for today</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <IoSearchOutline 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={20}
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://placeholder.com/40x40"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;