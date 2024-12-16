"use client";
import React, { useState, useEffect } from 'react';
import Start from './Start';
import Step1 from './Step1';
import Step2 from './Step2';

const OnBoarding: React.FC = () => {
  // Initialize state with a function that retrieves the saved step from localStorage
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('currentStep');
    return savedStep ? Number(savedStep) : 0; // Default to 0 if no saved value
  });

  // Save the current step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentStep', String(currentStep));
  }, [currentStep]);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrevious = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="onboarding-container">
      {currentStep === 0 && <Start onNext={handleNext} />}
      {currentStep === 1 && <Step1 onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 2 && <Step2 onNext={handleNext} onPrevious={handlePrevious} />}
    </div>
  );
};

export default OnBoarding;
