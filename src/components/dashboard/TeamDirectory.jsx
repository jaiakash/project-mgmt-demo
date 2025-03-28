// components/dashboard/TeamDirectory.jsx
const TeamDirectory = () => {
  const team = [
    {
      id: 1,
      name: "Dana R.",
      role: "Project Manager",
      projects: 12,
      tasks: 42,
      status: "online"
    },
    {
      id: 2,
      name: "Elon S.",
      role: "Key Account Planner",
      projects: 8,
      tasks: 24,
      status: "offline"
    },
    {
      id: 3,
      name: "Nancy W.",
      role: "Account Manager",
      projects: 10,
      tasks: 31,
      status: "online"
    },
    {
      id: 4,
      name: "James M.",
      role: "Digital Manager",
      projects: 6,
      tasks: 18,
      status: "online"
    }
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#1a1f36]">Team directory</h2>
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {team.map((member) => (
          <div key={member.id} className="flex items-start gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white
                ${member.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`} 
              />
            </div>

            <div>
              <h3 className="font-medium text-gray-700">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              
              <div className="flex items-center gap-4 mt-2 text-sm">
                <div>
                  <span className="text-gray-700">{member.projects}</span>
                  <span className="text-gray-400 ml-1">projects</span>
                </div>
                <div>
                  <span className="text-gray-700">{member.tasks}</span>
                  <span className="text-gray-400 ml-1">tasks</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDirectory;