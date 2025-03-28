const UrgentTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish monthly reporting",
      deadline: "Today"
    },
    {
      id: 2,
      title: "Report signing",
      deadline: "Today"
    },
    {
      id: 3,
      title: "Market overview keynote",
      deadline: "Today"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-lg font-semibold mb-4">Urgent tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-blue-500"
              />
              <span className="text-gray-700">{task.title}</span>
            </div>
            <span className="text-red-500 text-sm font-medium">{task.deadline}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrgentTasks;