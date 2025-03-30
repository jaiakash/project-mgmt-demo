// pages/TeamPage.tsx
import { useState } from 'react';
import TeamPageHeader from '../components/team/TeamPageHeader';
import ProjectProgress from '../components/team/ProjectProgress';
import TeamDirectory from '../components/team/TeamDirectory';
import TasksByUser from '../components/team/TasksByUser';
import MemberDetailsModal from '../components/team/MemberDetailsModal';
import TaskDetailsModal from '../components/team/TaskDetailModal';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const projectProgress = [
    {
      task: 'Resources check',
      months: ['January', 'February', 'March', 'April', 'May', 'June'],
      timeline: [0, 1, 1, 0, 0, 0],
      color: 'bg-orange-200',
      progress: 65,
      status: 'In Progress'
    },
    {
      task: 'Participants',
      timeline: [0, 0, 1, 1, 0, 0],
      color: 'bg-blue-200',
      progress: 45,
      status: 'In Progress'
    },
    {
      task: 'SWOT analysis',
      timeline: [0, 0, 0, 1, 1, 0],
      color: 'bg-emerald-200',
      progress: 80,
      status: 'Completed'
    },
    {
      task: 'Design research',
      timeline: [0, 0, 0, 1, 1, 1],
      color: 'bg-purple-200',
      progress: 30,
      status: 'In Progress'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dana R.",
      role: "Project Manager",
      avatar: "https://ui-avatars.com/api/?name=Dana+R&background=random",
      status: 'online',
      tasks: 12,
      projects: 4,
      email: "dana.r@company.com",
      department: "Management",
      joinedDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Elon S.",
      role: "Key Account Planner",
      avatar: "https://ui-avatars.com/api/?name=Elon+S&background=random",
      status: 'busy',
      tasks: 8,
      projects: 3,
      email: "elon.s@company.com",
      department: "Sales",
      joinedDate: "2023-03-20"
    },
    {
      id: 3,
      name: "Nancy W.",
      role: "Account Manager",
      avatar: "https://ui-avatars.com/api/?name=Nancy+W&background=random",
      status: 'online',
      tasks: 10,
      projects: 5,
      email: "nancy.w@company.com",
      department: "Sales",
      joinedDate: "2023-02-01"
    },
    {
      id: 4,
      name: "James M.",
      role: "Digital Manager",
      avatar: "https://ui-avatars.com/api/?name=James+M&background=random",
      status: 'offline',
      tasks: 6,
      projects: 2,
      email: "james.m@company.com",
      department: "Digital",
      joinedDate: "2023-04-10"
    }
  ];

  const userTasks = [
    {
      user: "Dana",
      avatar: "https://ui-avatars.com/api/?name=Dana+R&background=random",
      tasks: [
        {
          id: 1,
          name: "Research check-in",
          date: "Today",
          status: "Not started",
          priority: "High priority"
        },
        {
          id: 2,
          name: "Survey design",
          date: "Tomorrow",
          status: "In progress",
          priority: "Medium priority"
        },
        {
          id: 3,
          name: "Idea sprint",
          date: "Friday",
          status: "In progress",
          priority: "High priority"
        }
      ]
    },
    {
      user: "Elon",
      avatar: "https://ui-avatars.com/api/?name=Elon+S&background=random",
      tasks: [
        {
          id: 4,
          name: "Market analysis",
          date: "Today",
          status: "Not started",
          priority: "High priority"
        },
        {
          id: 5,
          name: "Surveys evaluation",
          date: "Thursday",
          status: "In progress",
          priority: "Medium priority"
        },
        {
          id: 6,
          name: "B2B Research",
          date: "Friday",
          status: "Paused",
          priority: "Low priority"
        }
      ]
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <TeamPageHeader teamMembers={teamMembers} />
      <ProjectProgress projectProgress={projectProgress} />

      <div className="grid grid-cols-2 gap-8">
        <TeamDirectory
          teamMembers={teamMembers}
          onMemberSelect={setSelectedMember}
        />
        <TasksByUser
          userTasks={userTasks}
          onTaskSelect={setSelectedTask}
        />
      </div>

      <MemberDetailsModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
      <TaskDetailsModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
};

export default TeamPage;