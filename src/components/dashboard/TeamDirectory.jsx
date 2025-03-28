const TeamDirectory = () => {
  const team = [
    {
      id: 1,
      name: "Dana R.",
      role: "Project Manager",
      avatar: "/avatar1.png"
    },
    {
      id: 2,
      name: "Elon S.",
      role: "Key Account Plann.",
      avatar: "/avatar2.png"
    },
    {
      id: 3,
      name: "Nancy W.",
      role: "Account Manager",
      avatar: "/avatar3.png"
    },
    {
      id: 4,
      name: "James M.",
      role: "Digital Manager",
      avatar: "/avatar4.png"
    }
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Team directory</h2>
        <button className="text-blue-600 text-sm hover:underline">
          See more →
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div>
                <p className="font-medium text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDirectory;