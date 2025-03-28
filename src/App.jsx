// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="ml-16 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;