import React from 'react';

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputGroup = ({ label, error, className, ...props }: InputGroupProps) => {
  const inputStyles = `
    w-full px-4 py-3 rounded-xl bg-dark-900/50 border 
    ${error 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
      : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500/20'}
    text-white focus:outline-none focus:ring-2 
    transition-all duration-200 placeholder-slate-500
    ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-300 mb-1 ml-1">
        {label}
      </label>
      <input className={inputStyles} {...props} />
      {error && (
        <p className="text-xs text-red-500 mt-1 ml-1 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputGroup;