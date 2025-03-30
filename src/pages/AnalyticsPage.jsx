// src/pages/AnalyticsPage.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Header from '../components/analytics/Header';
import OverviewCards from '../components/analytics/OverviewCards';
import ProjectSections from '../components/analytics/ProjectSections';
import { workingHoursData, revenueData, projectCategories, categoryStyles } from '../data/analytics';

const AnalyticsPage = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 min-h-screen relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-20 left-60 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-60 w-40 h-40 bg-purple-100 rounded-full blur-2xl opacity-20" />
      </div>

      <div className="relative z-10">
        <Header />
        <OverviewCards 
          workingHoursData={workingHoursData}
        />
        <ProjectSections 
          revenueData={revenueData}
          projectCategories={projectCategories}
          categoryStyles={categoryStyles}
        />
      </div>
    </div>
  );
};

export default AnalyticsPage;