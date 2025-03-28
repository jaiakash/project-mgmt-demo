import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
