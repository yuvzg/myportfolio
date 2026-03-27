import React, { useState, useEffect } from 'react';

const PreLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Loading Portfolio
          </h2>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="mt-4 h-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
            {progress < 30 && "Initializing..."}
            {progress >= 30 && progress < 60 && "Loading components..."}
            {progress >= 60 && progress < 90 && "Setting up animations..."}
            {progress >= 90 && "Almost ready!"}
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>
    </div>
  );
};

export default PreLoader;