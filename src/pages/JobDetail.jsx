import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SuccessModal from '../components/SucessModal';
import jobsData from '../data/jobs.json';
import '../styles/JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const job = jobsData.find(j => j.id === parseInt(id));

  const skillColors = [
    'bg-blue-50 text-blue-700 border-blue-100',
    'bg-emerald-50 text-emerald-700 border-emerald-100',
    'bg-violet-50 text-violet-700 border-violet-100',
    'bg-amber-50 text-amber-700 border-amber-100',
    'bg-rose-50 text-rose-700 border-rose-100',
    'bg-cyan-50 text-cyan-700 border-cyan-100',
    'bg-purple-50 text-purple-700 border-purple-100',
    'bg-pink-50 text-pink-700 border-pink-100',
  ];

  if (!job) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-xl mb-4">Job not found</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      <div className="job-detail-page min-h-full">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Back Button */}
            <button onClick={() => navigate('/')} className="back-button mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Jobs
            </button>

            {/* Header */}
            <div className="job-card section header-section mb-6">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${job.companyColor} rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}
                >
                  {job.companyInitial}
                </div>

                <span
                  className={`job-type-badge ${
                    job.typeColor === 'blue' ? 'bg-blue-50 text-blue-600' :
                    job.typeColor === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                    job.typeColor === 'violet' ? 'bg-violet-50 text-violet-600' :
                    job.typeColor === 'amber' ? 'bg-amber-50 text-amber-600' :
                    job.typeColor === 'rose' ? 'bg-rose-50 text-rose-600' :
                    'bg-cyan-50 text-cyan-600'
                  }`}
                >
                  {job.type}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                {job.title}
              </h1>
              <p className="text-lg text-slate-600 font-medium mb-4">
                {job.company}
              </p>
            </div>

            {/* Description */}
            <div className="job-card section mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Job Description
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Skills */}
            <div className="job-card section mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`skill-chip px-4 py-2 rounded-lg text-sm font-medium border ${skillColors[index % skillColors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="job-card section mb-6">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                ABOUT THIS ROLE
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Experience Level</p>
                  <p className="font-semibold">{job.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Employment Type</p>
                  <p className="font-semibold">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Salary Range</p>
                  <p className="font-semibold">{job.salary}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-8">
              <button
                onClick={handleApply}
                className="apply-btn w-full py-4 bg-blue-600 text-white font-bold rounded-xl text-lg"
              >
                Apply Now
              </button>

              <button className="secondary-btn w-full py-4 text-white font-bold rounded-xl">
                Save Job
              </button>
            </div>

          </div>
        </div>
      </div>

      {showModal && <SuccessModal onClose={handleCloseModal} />}
    </>
  );
};

export default JobDetail;
