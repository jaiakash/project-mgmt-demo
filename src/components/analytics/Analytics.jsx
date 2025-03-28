// pages/AnalyticsPage.jsx
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import { BsArrowRight, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const AnalyticsPage = () => {
  const workingHoursData = [
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 7.5 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 8 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 2 }
  ];

  const revenueData = [
    { month: 'Jan', value: 3000, profit: true },
    { month: 'Feb', value: 2800, profit: false },
    { month: 'Mar', value: 4000, profit: true },
    { month: 'Apr', value: 3800, profit: true },
    { month: 'May', value: 2900, profit: false },
    { month: 'Jun', value: 3200, profit: true },
    { month: 'Jul', value: 3800, profit: true },
    { month: 'Aug', value: 4200, profit: true },
    { month: 'Sep', value: 3900, profit: true },
    { month: 'Oct', value: 3700, profit: false },
    { month: 'Nov', value: 3500, profit: true },
    { month: 'Dec', value: 3800, profit: true }
  ];

  const projectCategories = [
    {
      name: 'Research',
      icon: '📊',
      description: 'Market analysis & data',
      activeProjects: 12,
      progress: 65
    },
    {
      name: 'Marketing',
      icon: '💡',
      description: 'Business planning',
      activeProjects: 8,
      progress: 72
    },
    {
      name: 'Operations',
      icon: '⚙️',
      description: 'Process optimization',
      activeProjects: 18,
      progress: 45
    },
    {
      name: 'Customers',
      icon: '👥',
      description: 'Client relationships',
      activeProjects: 15,
      progress: 58
    }
  ];

  const categoryStyles = [
    {
      gradient: 'from-orange-50 to-rose-50',
      border: 'border-orange-100/30',
      progress: 'bg-orange-200',
      button: 'bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-100'
    },
    {
      gradient: 'from-blue-50 to-indigo-50',
      border: 'border-blue-100/30',
      progress: 'bg-blue-200',
      button: 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100'
    },
    {
      gradient: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-100/30',
      progress: 'bg-emerald-200',
      button: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-100'
    },
    {
      gradient: 'from-purple-50 to-violet-50',
      border: 'border-purple-100/30',
      progress: 'bg-purple-200',
      button: 'bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-100'
    }
  ];

  return (
    <div className="p-8 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Report</h1>
          <p className="text-gray-500 text-sm mt-1">Financial year 2024</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 bg-white shadow-sm">
            <option>Last 12 months</option>
            <option>This year</option>
            <option>Last year</option>
          </select>
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Projects Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-orange-100/30">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700">Total projects</h3>
            <span className="p-2 rounded-lg bg-orange-50/50">📈</span>
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-4">182</p>
          <button className={`w-full py-2.5 rounded-lg transition-all ${categoryStyles[0].button}`}>
            Add new project
          </button>
        </div>

        {/* Team Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-blue-100/30">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700">Team size</h3>
            <span className="p-2 rounded-lg bg-blue-50/50">👥</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl font-bold text-gray-800">14</p>
            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              +2 this month
            </span>
          </div>
          <button className={`w-full py-2.5 rounded-lg transition-all ${categoryStyles[1].button}`}>
            Add new members
          </button>
        </div>

        {/* Hours Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-purple-100/30">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-700">Total working hours</h3>
            <select className="text-sm bg-purple-50 px-2 py-1 rounded-lg text-purple-600 border border-purple-100">
              <option>Week</option>
            </select>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-3xl font-bold text-gray-800">37h</p>
            <div className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs border border-purple-100">
              Avg. 148h/month
            </div>
          </div>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={workingHoursData} barSize={8}>
              <Bar dataKey="hours" fill="#C4B5FD" radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Project Progress */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Project progress</h2>
          <div className="flex gap-2">
            {['Research', 'Design', 'Development', 'Marketing'].map((label, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="h-12 bg-gray-50 rounded-lg overflow-hidden flex">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-500 w-1/4"
            style={{ transition: 'width 0.3s ease' }}
          />
          <div
            className="bg-gradient-to-r from-purple-400 to-purple-500 w-1/3"
            style={{ transition: 'width 0.3s ease' }}
          />
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-500 w-1/6"
            style={{ transition: 'width 0.3s ease' }}
          />
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-500 w-1/4"
            style={{ transition: 'width 0.3s ease' }}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-6">
            {['February', 'March', 'April'].map((month, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-sm font-medium text-gray-700">{month}</span>
                <span className="text-xs text-gray-500">2024</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs text-blue-600">On track</span>
          </div>
        </div>
      </div>

      {/* Project Revenue */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Project revenue</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-gray-800">$12,856.14</span>
              <div className="flex items-center gap-1 text-emerald-600 bg-gradient-to-r from-emerald-50 to-green-50 
          px-3 py-1.5 rounded-full text-sm border border-emerald-100">
                <BsArrowUpShort size={20} />
                <span>8.2%</span>
              </div>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
            <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 
        text-transparent bg-clip-text mt-1">
              Avg. $3,000/month
            </div>
          </div>
          <select className="text-sm border-2 border-gray-200 rounded-lg px-3 py-2 bg-white shadow-sm
      focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none">
            <option>Year</option>
            <option>Month</option>
            <option>Quarter</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={revenueData} barSize={16}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity={1} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F87171" stopOpacity={1} />
                <stop offset="100%" stopColor="#EF4444" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFF',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                padding: '12px'
              }}
              formatter={(value) => [`$${value}`, 'Revenue']}
              cursor={{ fill: '#F8FAFC' }}
            />
            <Bar
              dataKey="value"
              fill={(data) => data.profit ? 'url(#colorProfit)' : 'url(#colorLoss)'}
              radius={[6, 6, 6, 6]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-sm text-gray-600">Profit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-sm text-gray-600">Loss</span>
          </div>
        </div>
      </div>

      {/* Project Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Project categories</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm group">
            See more
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {projectCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${categoryStyles[index].gradient} 
                rounded-xl p-6 shadow-sm hover:shadow-md transition-all 
                border ${categoryStyles[index].border} group cursor-pointer`}
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="text-xs text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                  {category.progress}%
                </span>
              </div>
              <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{category.description}</p>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-gray-600">{category.activeProjects} active projects</span>
              </div>
              <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${categoryStyles[index].progress} rounded-full transition-all duration-500`}
                  style={{ width: `${category.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnalyticsPage;