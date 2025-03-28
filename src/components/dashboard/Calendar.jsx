import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Calendar = () => {
  const [viewType, setViewType] = useState('Week');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const events = [
    { id: 1, title: 'Survey design', time: '9:00', day: 'Tuesday', color: 'bg-orange-100 text-orange-800' },
    { id: 2, title: 'Customer review', time: '10:00', day: 'Monday', color: 'bg-yellow-100 text-yellow-800' },
    { id: 3, title: 'Stakeholders review', time: '10:00', day: 'Thursday', color: 'bg-green-100 text-green-800' },
    { id: 4, title: 'Call preparation', time: '11:00', day: 'Wednesday', color: 'bg-purple-100 text-purple-800' },
    { id: 5, title: '1:1 with Frank', time: '13:00', day: 'Friday', color: 'bg-orange-100 text-orange-800' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Calendar</h2>
          <p className="text-gray-500">April 8, 2022</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {['Day', 'Week', 'Month'].map((type) => (
              <button
                key={type}
                className={`px-4 py-1 rounded-md ${
                  viewType === type 
                    ? 'bg-white shadow-sm' 
                    : 'text-gray-500'
                }`}
                onClick={() => setViewType(type)}
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <IoIosArrowBack size={20} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {days.map((day, index) => (
          <div key={day} className="border-r last:border-r-0">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500">{day}</p>
              <p className={`text-lg mt-1 ${index === 4 ? 'text-orange-500' : ''}`}>
                {index + 4}
              </p>
            </div>
            
            <div className="space-y-2 px-2">
              {events
                .filter(event => event.day === day)
                .map(event => (
                  <div
                    key={event.id}
                    className={`${event.color} p-2 rounded-lg text-sm`}
                  >
                    <p className="font-medium">{event.title}</p>
                    <p className="text-xs mt-1">{event.time}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;