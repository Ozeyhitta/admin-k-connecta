import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-purple-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full px-3 py-2.5 ${icon ? 'pl-10' : ''} bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 focus:bg-white/[0.07] transition-all duration-200 backdrop-blur-sm hover:border-white/15 ${error ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';