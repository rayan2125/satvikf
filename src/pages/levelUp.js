import { useState, useEffect } from "react";
import Testimonial from "./testimonial";

const LevelUp = () => {
  const steps = [
    {
      title: "Personalized Learning",
      content:
        "At Level Up, we understand that each student has unique learning needs and goals. Our personalized learning approach tailors educational paths specifically for each student based on their strengths, weaknesses, and interests.",
    },
    {
      title: "Comprehensive Subject Analysis",
      content:
        "Our tutors conduct detailed analyses of each subject’s curriculum and student performance to identify strengths and areas for improvement. This thorough understanding aids in customizing teaching strategies and learning materials to better suit the student's needs.",
    },
    {
      title: "Monthly Performance Reports & Forward Planning",
      content:
        "Parents and students receive detailed monthly reports that outline the student’s performance, highlight achievements, and note areas needing attention. These insights drive the forward planning of educational strategies, helping to adjust goals and methods as the student progresses.",
    },
    {
      title: "Cultivation of Future-Ready Skills",
      content:
        "Our curriculum emphasizes the development of skills essential for future success, such as critical thinking, problem-solving, digital literacy, and adaptability. These skills are integrated into our teaching methods and assessments.",
    },
    {
      title: "Personal Development & Social Skills Enhancement",
      content:
        "We leverage advanced technology to facilitate our assessment and tracking processes. This includes learning management systems that house educational resources, track academic progress, and analyze data to provide insights into each student's learning patterns.",
    },
    {
      title: "Comparative Benchmarking",
      content:
        "Students are periodically assessed not only on their individual progress but also against standardized benchmarks. This comparative analysis helps in understanding a student's standing on a broader scale and in identifying opportunities for improvement.",
    },
    {
      title: "Diligent Tracking of Predicted Grades",
      content:
        "We leverage advanced technology to facilitate our assessment and tracking processes. This includes learning management systems that house educational resources, track academic progress, and analyze data to provide insights into each student's learning patterns.",
    },
    {
      title: "Exam-Oriented Approach for Mastery",
      content:
        "Our approach to mastery ensures that students are not only prepared to pass their exams but to excel. We focus on exam techniques, past paper practice, and effective revision strategies that boost confidence and improve exam performance.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000); // Change step every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [steps.length]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Why Choose Level Up
      </h1>
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          {steps[currentStep].title}
        </h2>
        <p className="text-lg text-gray-700">{steps[currentStep].content}</p>
      </div>
      <div className="mt-6">
        <p className="text-gray-500 text-sm">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>
      <Testimonial/>
    </div>
  );
};

export default LevelUp;
