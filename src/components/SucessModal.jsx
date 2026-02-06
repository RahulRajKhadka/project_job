import { useEffect } from "react";
import Button from "./Button";
import "../styles/SucessModal.css";
const SuccessModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop - uses Tailwind's backdrop-blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-400">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100">
          {/* Icon */}
          <div className="flex justify-center mb-8 animate-in zoom-in-50 duration-600">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline
                  points="20 6 9 17 4 12"
                  className="animate-checkmark"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-slate-900 mb-3 animate-in slide-in-from-top-4 duration-500">
            Application Submitted Successfully!
          </h1>

          <p className="text-center text-slate-600 text-lg mb-8 animate-in slide-in-from-top-4 duration-500 delay-100">
            Thank you for applying. The company will review your application and
            contact you if shortlisted.
          </p>

          <div className="space-y-3 animate-in slide-in-from-top-4 duration-500 delay-200">
            <Button onClick={onClose} fullWidth variant="primary">
              Back to Jobs
            </Button>
            <button className="w-full py-3 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all">
              View Applied Jobs
            </button>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            You'll receive updates via email
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
