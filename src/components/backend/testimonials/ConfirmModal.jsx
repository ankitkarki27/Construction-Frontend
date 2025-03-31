import React, { useEffect, useState } from 'react';

const ConfirmModal = ({ isOpen, onConfirm, onCancel, testimonial }) => {
  const [animationState, setAnimationState] = useState('hidden');
  
  // Handle animation states with faster timing
  useEffect(() => {
    if (isOpen) {
      setAnimationState('entering');
      // Reduced timeout from 50ms to 10ms for faster appearance
      const timer = setTimeout(() => setAnimationState('entered'), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationState('exiting');
      // Reduced animation exit time from 300ms to 150ms
      const timer = setTimeout(() => setAnimationState('hidden'), 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onCancel]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (animationState === 'hidden') return null;

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  const backdropClasses = {
    entering: 'opacity-0',
    entered: 'opacity-100',
    exiting: 'opacity-0'
  };

  const modalClasses = {
    entering: 'translate-y-4 opacity-0',
    entered: 'translate-y-0 opacity-100',
    exiting: 'translate-y-4 opacity-0'
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-200 bg-opacity-40 backdrop-blur-sm transition-opacity duration-150 ${backdropClasses[animationState]}`}
      onClick={handleBackdropClick}
      aria-labelledby="confirmation-modal-title"
      aria-hidden={!isOpen}
    >
      <div 
        className={`bg-white rounded-xl shadow-lg w-full max-w-xl p-6 transform transition-all duration-150 ease-out border border-gray-100 ${modalClasses[animationState]}`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-50 rounded-full p-2 mr-3">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 id="confirmation-modal-title" className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h3>
          </div>
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Close"
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700">
            Are you sure you want to delete the Blog titled "<span className="font-medium text-gray-900">{testimonial?.testimonial}</span> by <span className="font-medium text-gray-900">{testimonial?.name}</span> "?
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            This action cannot be undone and all related data will be permanently removed.
          </p>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;