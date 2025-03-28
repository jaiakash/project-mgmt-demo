// components/modals/EventDetailsModal.jsx
const EventDetailsModal = ({ event, isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 
      ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}>
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{event?.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">×</button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <span>🕒</span>
            <span>{event?.time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>📍</span>
            <span>Meeting Room 3</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>👥</span>
            <div className="flex -space-x-2">
              {/* Attendee avatars */}
            </div>
          </div>
          
          <div className="border-t pt-4 mt-4">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">Event description goes here...</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
            Edit
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Join meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;