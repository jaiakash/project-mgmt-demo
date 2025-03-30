// components/Search.jsx
const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search tasks, projects, or team members..."
        className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        🔍
      </div>
    </div>
  );
};

export default Search;