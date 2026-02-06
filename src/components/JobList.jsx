import JobCard from './JobCard';

const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job}
          onJobClick={onJobClick}
        />
      ))}
    </div>
  );
};

export default JobList;