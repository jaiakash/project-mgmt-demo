const Comments = () => {
  const comments = [
    {
      id: 1,
      user: "Elon S.",
      project: "Market research 2024",
      message: "Find my keynote attached in the...",
      avatar: "/avatar1.png"
    },
    {
      id: 2,
      user: "Dana R.",
      project: "Market research 2024",
      message: "I've added some new data. Let's...",
      avatar: "/avatar2.png"
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">New comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <span className="font-medium text-sm">{comment.user}</span>
                <span className="text-gray-500 text-sm"> in </span>
                <span className="text-gray-700 text-sm">{comment.project}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;