import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SuccessModal from "../components/SucessModal";
import jobsData from "../data/jobs.json";
import "../styles/JobDetail.css";
import Button from "../components/Button.jsx";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const job = jobsData.find((j) => j.id === parseInt(id));

  const skillColors = [
    "bg-blue-50 text-blue-700 border-blue-100",
    "bg-emerald-50 text-emerald-700 border-emerald-100",
    "bg-violet-50 text-violet-700 border-violet-100",
    "bg-amber-50 text-amber-700 border-amber-100",
    "bg-rose-50 text-rose-700 border-rose-100",
    "bg-cyan-50 text-cyan-700 border-cyan-100",
    "bg-purple-50 text-purple-700 border-purple-100",
    "bg-pink-50 text-pink-700 border-pink-100",
  ];

  if (!job) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-xl mb-4">Job not found</p>
          <button
            onClick={() => navigate("/")}
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
    navigate("/");
  };
  return (
    <>
      <div className="min-h-full bg-slate-50">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-slate-600 font-medium hover:text-slate-900 transition-colors mb-6"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Jobs
            </button>

            <div className="header-section bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-6">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-16 h-16 bg-linear-to-br ${job.companyColor} rounded-2xl flex items-center justify-center text-white font-bold text-2xl`}
                >
                  {job.companyInitial}
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    job.typeColor === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : job.typeColor === "emerald"
                        ? "bg-emerald-50 text-emerald-600"
                        : job.typeColor === "violet"
                          ? "bg-violet-50 text-violet-600"
                          : job.typeColor === "amber"
                            ? "bg-amber-50 text-amber-600"
                            : job.typeColor === "rose"
                              ? "bg-rose-50 text-rose-600"
                              : "bg-cyan-50 text-cyan-600"
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

              {/* Location and Salary */}
              <div className="flex gap-4 text-slate-500 mb-6 items-center">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{job.location}</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
                  />
                </svg>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" opacity="0.5" />
                      <path
                        strokeLinecap="round"
                        d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"
                      />
                    </g>
                  </svg>
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>

            <div className="section bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Job Description
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            <div className="section bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Skills</h2>

              <div className="mb-4">
                <p className="text-slate-500 font-medium mb-2">
                  Required Skills
                </p>
                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`skill-chip px-4 py-1 rounded-full text-sm font-medium border hover:-translate-y-0.5 transition-all ${skillColors[index % skillColors.length]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <>
                  <hr className="my-4 border-slate-200" />
                  <div>
                    <p className="text-slate-500 font-medium mb-2">
                      Nice to Have
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {job.niceToHave.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 bg-slate-50 text-slate-700 font-medium rounded-full text-sm border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* About */}
            <div className="section bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-6">
              <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">
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

            <div className="space-y-3 mb-8">
              <Button
                onClick={handleApply}
                fullWidth
                variant="secondary"
                className="py-4 text-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 shadow-lg shadow-blue-500/25"
              >
                Apply Now
              </Button>
              <Button fullWidth variant="primary" className="py-4">
                Save Job
              </Button>
            </div>

            <div>
              <p className="flex justify-center font-bold">
                Last Updated: 2 day ago
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && <SuccessModal onClose={handleCloseModal} />}
    </>
  );
};

export default JobDetail;
