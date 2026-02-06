import Button from './Button';
import { typeColorMap, hoverColorMap } from '../utils/colors.js';

const JobCard = ({ job, onJobClick }) => {
  const handleClick = () => {
    onJobClick(job);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${hoverColorMap[job.typeColor]}`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${job.companyColor} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
          {job.companyInitial}
        </div>
        <span className={`px-3 py-1 ${typeColorMap[job.typeColor]} text-sm font-medium rounded-full`}>
          {job.type}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h3>
      <p className="text-slate-600 font-medium mb-1">{job.company}</p>
      
      <div className="flex items-center text-slate-400 text-sm mb-5">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {job.location}
      </div>

      <Button onClick={handleClick} fullWidth variant="primary">
        View Details
      </Button>
    </div>
  );
};

export default JobCard;