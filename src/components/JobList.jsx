import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job}
        />
      ))}
    </div>
  );
};

export default JobList;