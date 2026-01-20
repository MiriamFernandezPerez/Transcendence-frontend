// import React from 'react';

interface AlertSuccessProps {
  title: string;
  message?: string;
}

const AlertSuccess = ({ title, message }: AlertSuccessProps) => {
  return (
    <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/50 flex items-center gap-3 animate-fade-in">
      <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <h3 className="text-green-500 font-semibold text-sm">{title}</h3>
        {message && <p className="text-green-400/80 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default AlertSuccess;