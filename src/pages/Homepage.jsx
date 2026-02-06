import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';
import JobList from '../components/JobList.jsx';
import jobsData from '../data/jobs.json';

const HomePage = () => {
  const [jobs] = useState(jobsData);
  const navigate = useNavigate();

  const handleJobClick = (job) => {
    navigate(`/job/${job.id}`);
  };


  const jobsToShow = jobs.slice(0, 4);

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

        <JobList jobs={jobsToShow} onJobClick={handleJobClick} />

    
        <div className="mt-10 text-center">
          <p className="text-slate-400">
            Showing{' '}
            <span className="font-semibold text-slate-600">{jobsToShow.length}</span> of{' '}
            <span className="font-semibold text-slate-600">{jobs.length}</span> available positions
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
