"use client";
import React, { useState, useEffect } from "react";
import Start from "./Start";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import LastStep from "./LastStep";

const OnBoarding: React.FC = () => {
  // Initialize state with a function that retrieves the saved step from localStorage
  const totalSteps = 9; // Total number of steps
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? Number(savedStep) : 0;
  });

  useEffect(() => {
    localStorage.setItem("currentStep", String(currentStep));
  }, [currentStep]);

  const handleNext = () =>
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const handlePrevious = () =>
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  // Calculate progress as a percentage
  const progress = ((currentStep / totalSteps) * 100).toFixed(2);

  return (
    <div className="onboarding-container gradient">
   {currentStep !== 0 && (
  <div className="pt-40 flex justify-center">
    <div
      className="max-w-[1180px] relative"
      style={{
        width: "100%",
        height: "3px",
        backgroundColor: "#FFFFFF3D",
        marginBottom: "20px",
        borderRadius: "5px",
      }}
    >
      {/* Filled Progress Bar */}
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#fff",
          transition: "width 0.3s ease-in-out",
          borderRadius: "5px",
        }}
      />

      {/* Circle at the end of the progress */}
      <div
        className="progress-circle"
        style={{
          position: "absolute",
          top: "50%",
          left: `${progress}%`,
          transform: "translate(-50%, -50%)",
          width: "15px",
          height: "15px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  </div>
)}

      {currentStep === 0 && <Start onNext={handleNext} />}
      {currentStep === 1 && (
        <Step1 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 2 && (
        <Step2 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 3 && (
        <Step3 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 4 && (
        <Step4 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 5 && (
        <Step5 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 6 && (
        <Step6 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 7 && (
        <Step7 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 8 && (
        <Step8 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 9 && (
        <LastStep onNext={handleNext} onPrevious={handlePrevious} />
      )}
    </div>
  );
};

export default OnBoarding;
