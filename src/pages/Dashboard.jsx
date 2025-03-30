import { useState } from 'react';

import CreateTaskModal from '../components/dashboard/CreateTaskModal';
import EventDetailsModal from '../components/dashboard/EventDetailsModal';
import Welcome from '../components/dashboard/Welcome';
import Calendar from '../components/dashboard/Calendar';
import UrgentTasks from '../components/dashboard/UrgentTasks';
import ProjectDirectory from '../components/dashboard/ProjectDirectory';
import TeamDirectory from '../components/dashboard/TeamDirectory';
import Categories from '../components/dashboard/Categories';

const Dashboard = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 ml-16 p-6 transition-all duration-200">
        <div className="max-w-10xl mx-auto">
          <Welcome />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <Calendar onEventClick={handleEventClick} />
              <div className="grid grid-cols-2 gap-6">
                <ProjectDirectory />
                <TeamDirectory />
              </div>
              <Categories />
            </div>
            <div className="col-span-4">
              <UrgentTasks onAddTask={() => setIsTaskModalOpen(true)} />
            </div>
          </div>
          <CreateTaskModal
            isOpen={isTaskModalOpen}
            onClose={() => setIsTaskModalOpen(false)}
          />
          <EventDetailsModal
            isOpen={isEventModalOpen}
            onClose={() => setIsEventModalOpen(false)}
            event={selectedEvent}
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;