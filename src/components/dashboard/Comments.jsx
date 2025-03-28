// components/dashboard/Comments.jsx
import { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';

const Comments = () => {
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: 1,
      user: {
        name: "Elon S.",
        avatar: "https://ui-avatars.com/api/?name=Elon+S&background=random",
        role: "Key Account Planner"
      },
      project: "Market research 2024",
      message: "Find my keynote attached in the presentation folder. Please review and provide feedback by EOD.",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      user: {
        name: "Dana R.",
        avatar: "https://ui-avatars.com/api/?name=Dana+R&background=random",
        role: "Project Manager"
      },
      project: "Market research 2024",
      message: "I've added some new data points to the research document. Let's discuss this in our next meeting.",
      time: "4 hours ago",
      unread: false
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#1a1f36]">New comments</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <BsThreeDots size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className={`relative p-4 rounded-xl transition-all duration-200 
              ${comment.unread 
                ? 'bg-blue-50/50 hover:bg-blue-50' 
                : 'hover:bg-gray-50'
              }`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <img 
                  src={comment.user.avatar} 
                  alt={comment.user.name}
                  className="w-10 h-10 rounded-full ring-2 ring-white"
                />
                {comment.unread && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-[#1a1f36]">{comment.user.name}</span>
                  <span className="text-sm text-gray-500">in</span>
                  <span className="text-sm font-medium text-gray-700">{comment.project}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{comment.message}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-gray-400">{comment.time}</span>
                  <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="mt-6">
        <div className="relative">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-xl border border-gray-200 
                     focus:border-blue-300 focus:ring-2 focus:ring-blue-100 
                     outline-none transition-all duration-200"
          />
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 
                     text-blue-500 hover:text-blue-600 transition-colors"
          >
            <IoSendSharp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;