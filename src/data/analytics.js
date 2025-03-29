// src/data/analytics.js
export const workingHoursData = [
  { day: 'Mon', hours: 8 },
  { day: 'Tue', hours: 7.5 },
  { day: 'Wed', hours: 8 },
  { day: 'Thu', hours: 8 },
  { day: 'Fri', hours: 6 },
  { day: 'Sat', hours: 4 },
  { day: 'Sun', hours: 2 }
];

export const revenueData = [
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

export const projectCategories = [
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

export const categoryStyles = [
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