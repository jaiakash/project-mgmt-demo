import { BsThreeDots } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';

const ProjectDirectory = () => {
  const projects = [
    {
      id: 1,
      name: "Market research 2024",
      category: "Research",
      progress: 75,
      status: "Active",
      members: ["/avatar1.png", "/avatar2.png"],
    },
    {
      id: 2,
      name: "New proposals",
      category: "Strategy",
      progress: 45,
      status: "Review",
      members: ["/avatar3.png"],
    },
    {
      id: 3,
      name: "Brand sprints",
      category: "Design",
      progress: 90,
      status: "Active",
      members: ["/avatar1.png", "/avatar2.png"],
    }
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#1a1f36]">Project directory</h2>
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          + Add project
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-3 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <IoChevronForward 
                className="text-gray-400 group-hover:text-gray-600" 
                size={16} 
              />
              <div>
                <h3 className="text-gray-700 font-medium">{project.name}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Progress</span>
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{project.progress}%</span>
              </div>

              <div className="flex -space-x-2">
                {project.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>

              <span className={`px-2 py-1 text-sm rounded-full ${
                project.status === 'Active' 
                  ? 'bg-green-50 text-green-600' 
                  : 'bg-yellow-50 text-yellow-600'
              }`}>
                {project.status}
              </span>

              <button className="text-gray-400 hover:text-gray-600">
                <BsThreeDots size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDirectory;