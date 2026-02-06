import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar.jsx';
import JobList from '../components/JobList.jsx';
import jobsData from '../data/jobs.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [jobs] = useState(jobsData);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  
  const jobsPerPage = 4;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const jobsToShow = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleJobClick = (job) => {
    navigate(`/job/${job.id}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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

        {/* Simple Pagination */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-3 py-2 rounded ${
              currentPage === 1
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-blue-500 hover:text-blue-700'
            }`}
          >
            <ChevronLeft size={18} />
            <span>Previous</span>
          </button>
          
          <span className="text-slate-600">
            {currentPage} / {totalPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-3 py-2 rounded ${
              currentPage === totalPages
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-blue-500 hover:text-blue-700'
            }`}
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;