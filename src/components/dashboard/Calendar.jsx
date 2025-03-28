// components/dashboard/Calendar.jsx
import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Calendar = () => {
  const [viewType, setViewType] = useState('Week');

  const days = [
    {
      name: 'Monday',
      date: 4,
      events: [
        {
          id: 1,
          title: 'Customer review',
          time: '10:00',
          color: 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-400'
        }
      ]
    },
    {
      name: 'Tuesday',
      date: 5,
      events: [
        {
          id: 2,
          title: 'Survey design',
          time: '9:00',
          color: 'bg-orange-100 text-orange-800 border-l-4 border-orange-400'
        },
        {
          id: 3,
          title: 'Key account planning',
          time: '13:00',
          color: 'bg-green-100 text-green-800 border-l-4 border-green-400'
        },
        {
          id: 4,
          title: 'Keynote takeaways',
          time: '15:00',
          color: 'bg-blue-100 text-blue-800 border-l-4 border-blue-400'
        }
      ]
    },
    {
      name: 'Wednesday',
      date: 6,
      events: [
        {
          id: 5,
          title: 'Call preparation',
          time: '11:00',
          color: 'bg-purple-100 text-purple-800 border-l-4 border-purple-400'
        },
        {
          id: 6,
          title: 'Sales round-up Q2',
          time: '12:00',
          color: 'bg-blue-100 text-blue-800 border-l-4 border-blue-400'
        },
        {
          id: 7,
          title: 'Code review',
          time: '17:00',
          color: 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-400'
        }
      ]
    },
    {
      name: 'Thursday',
      date: 7,
      events: [
        {
          id: 8,
          title: 'Stakeholders review',
          time: '10:00',
          color: 'bg-green-100 text-green-800 border-l-4 border-green-400'
        }
      ]
    },
    {
      name: 'Friday',
      date: 8,
      isToday: true,
      events: [
        {
          id: 9,
          title: 'Data check-in',
          time: '10:00',
          color: 'bg-blue-100 text-blue-800 border-l-4 border-blue-400'
        },
        {
          id: 10,
          title: '1:1 with Frank',
          time: '13:00',
          color: 'bg-orange-100 text-orange-800 border-l-4 border-orange-400'
        },
        {
          id: 11,
          title: 'Hiring reviews',
          time: '15:00',
          color: 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-400'
        },
        {
          id: 12,
          title: 'Business analysis',
          time: '16:00',
          color: 'bg-purple-100 text-purple-800 border-l-4 border-purple-400'
        }
      ]
    }
  ];

  const timeSlots = Array.from({ length: 10 }, (_, i) => {
    const hour = i + 9;
    return `${hour}:00`;
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold text-[#1a1f36]">Calendar</h2>
          <p className="text-gray-500">April 8, 2022</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-50 rounded-lg p-1">
            {['Day', 'Week', 'Month'].map((type) => (
              <button
                key={type}
                onClick={() => setViewType(type)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                  ${viewType === type
                    ? 'bg-white text-[#1a1f36] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex gap-1">
            <button className="p-2 rounded-lg hover:bg-gray-50">
              <IoChevronBack size={18} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-50">
              <IoChevronForward size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-5 gap-4">
        {days.map((day, index) => (
          <div key={index} className="relative">
            {/* Day Header */}
            <div className="text-center mb-4 pb-2 border-b">
              <p className="text-sm text-gray-500">{day.name}</p>
              <p className={`text-lg font-medium ${day.isToday ? 'text-blue-500' : ''}`}>
                {day.date}
              </p>
            </div>

            {/* Time Grid */}
            <div className="relative h-[600px]">
              {/* Time Indicators */}
              {timeSlots.map((time, idx) => (
                <div
                  key={time}
                  className="absolute w-full border-t border-gray-100 text-xs text-gray-400"
                  style={{ top: `${idx * 60}px` }}
                >
                  {time}
                </div>
              ))}

              {/* Events */}
              {day.events.map((event) => {
                const hour = parseInt(event.time.split(':')[0]);
                const minute = parseInt(event.time.split(':')[1]);
                const topPosition = ((hour - 9) * 60) + minute;

                return (
                  <div
                    key={event.id}
                    className={`absolute w-[90%] left-[15%] p-2 rounded-lg ${event.color} 
                      cursor-pointer hover:shadow-md transition-shadow duration-200`}
                    style={{
                      top: `${topPosition}px`,
                      height: '50px', // Fixed height for events
                      zIndex: hour // Stack events based on time
                    }}
                  >
                    <p className="text-sm font-medium truncate">{event.title}</p>
                    <p className="text-xs opacity-75">{event.time}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;