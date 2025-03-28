import Layout from './components/layout/Layout';
import Welcome from './components/dashboard/Welcome';
import UrgentTasks from './components/dashboard/UrgentTasks';
import Calendar from './components/dashboard/Calendar';
import ProjectDirectory from './components/dashboard/ProjectDirectory';
import TeamDirectory from './components/dashboard/TeamDirectory';
import Comments from './components/dashboard/Comments';
import Categories from './components/dashboard/Categories';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Layout>
        <Welcome />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <Calendar />
            <div className="grid grid-cols-2 gap-6">
              <ProjectDirectory />
              <TeamDirectory />
            </div>
            <Categories />
          </div>
          <div className="col-span-4">
            <UrgentTasks />
            <Comments />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;