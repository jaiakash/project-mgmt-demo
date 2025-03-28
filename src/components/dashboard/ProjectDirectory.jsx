const ProjectDirectory = () => {
  const projects = [
    {
      id: 1,
      name: "Market research 2024",
      members: ["/avatar1.png", "/avatar2.png"],
    },
    {
      id: 2,
      name: "New proposals",
      members: ["/avatar3.png"],
    },
    {
      id: 3,
      name: "Brand sprints",
      members: ["/avatar1.png", "/avatar2.png"],
    },
    {
      id: 4,
      name: "Customer experience Q3",
      members: ["/avatar1.png", "/avatar2.png", "/avatar3.png"],
    },
    {
      id: 5,
      name: "Market research 2024",
      members: ["/avatar1.png"],
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Project directory</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400">▼</span>
              <span className="text-gray-700">{project.name}</span>
            </div>
            <div className="flex -space-x-2">
              {project.members.map((member, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
          </div>
        ))}
        <button className="text-gray-500 hover:text-gray-700 text-sm mt-4">
          + Add more
        </button>
      </div>
    </div>
  );
};

export default ProjectDirectory;