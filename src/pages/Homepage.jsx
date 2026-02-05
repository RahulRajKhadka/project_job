import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import JobList from '../components/JobList.jsx';
import jobsData from '../data/jobs.json';

const HomePage = ({ onJobClick }) => {
  const [jobs] = useState(jobsData);

  return (
    <div className="min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Available Jobs
          </h1>
          <p className="text-slate-500 text-lg">
            Discover your next career opportunity
          </p>
        </div>

       
        <SearchBar />

        <JobList jobs={jobs} onJobClick={onJobClick} />

   

    
        <div className="mt-10 text-center">
          <p className="text-slate-400">
            Showing <span className="font-semibold text-slate-600">{jobs.length}</span> of{' '}
            <span className="font-semibold text-slate-600">124</span> available positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;