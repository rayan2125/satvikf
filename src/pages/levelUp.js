import { useState, useEffect } from "react";
import Testimonial from "./testimonial";
import ProgressBar from "@/components/ProgressBar/progressbar";
import Image from "next/image";

const LevelUp = () => {
  const steps = [
    {
      id: 1,
      title: "Personalized Learning",
      img: "/About-1/personalized-training.png",
      content:
        "At Level Up, we understand that each student has unique learning needs and goals. Our personalized learning approach tailors educational paths specifically for each student based on their strengths, weaknesses, and interests.",
    },
    {
      id: 2,
      title: "Comprehensive Subject Analysis",
      img: "/About-1/personalized-training.png",
      content:
        "Our tutors conduct detailed analyses of each subject’s curriculum and student performance to identify strengths and areas for improvement. This thorough understanding aids in customizing teaching strategies and learning materials to better suit the student's needs.",
    },
    {
      id: 3,
      title: "Monthly Performance Reports & Forward Planning",
      img: "/About-1/personalized-training.png",
      content:
        "Parents and students receive detailed monthly reports that outline the student’s performance, highlight achievements, and note areas needing attention. These insights drive the forward planning of educational strategies, helping to adjust goals and methods as the student progresses.",
    },
    {
      id: 4,
      title: "Cultivation of Future-Ready Skills",
      img: "/About-1/personalized-training.png",
      content:
        "Our curriculum emphasizes the development of skills essential for future success, such as critical thinking, problem-solving, digital literacy, and adaptability. These skills are integrated into our teaching methods and assessments.",
    },
    {
      id: 5,
      title: "Personal Development & Social Skills Enhancement",
      img: "/About-1/personalized-training.png",
      content:
        "We leverage advanced technology to facilitate our assessment and tracking processes. This includes learning management systems that house educational resources, track academic progress, and analyze data to provide insights into each student's learning patterns.",
    },
    {
      id: 6,
      title: "Comparative Benchmarking",
      img: "/About-1/personalized-training.png",
      content:
        "Students are periodically assessed not only on their individual progress but also against standardized benchmarks. This comparative analysis helps in understanding a student's standing on a broader scale and in identifying opportunities for improvement.",
    },
    {
      id: 7,
      title: "Diligent Tracking of Predicted Grades",
      img: "/About-1/personalized-training.png",
      content:
        "We leverage advanced technology to facilitate our assessment and tracking processes. This includes learning management systems that house educational resources, track academic progress, and analyze data to provide insights into each student's learning patterns.",
    },
    {
      id: 8,
      title: "Exam-Oriented Approach for Mastery",
      img: "/About-1/personalized-training.png",
      content:
        "Our approach to mastery ensures that students are not only prepared to pass their exams but to excel. We focus on exam techniques, past paper practice, and effective revision strategies that boost confidence and improve exam performance.",
    },
  ];

  const [progress, setProgress] = useState(new Array(steps.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      const updatedProgress = progress.map((_, index) => {
        return index <= Math.floor(scrollPercentage / (100 / steps.length))
          ? 100
          : 0;
      });

      setTimeout(() => {
        setProgress(updatedProgress);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial progress on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <>
    <div  style={{ background: '#010017' }}>

    <div className="min-h-screen flex flex-col items-center justify-center py-8" >
      <div>
        <div className="flex items-center justify-start">
          <div className="relative top-3 ">
            <Image
              src="/About-1/header-vector.png"
              alt="Personalized Training"
              width={50}
              height={50}
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-20 text-center ml-8">
          Why Choose Level Up
        </h1>

      </div>

      {steps.map((step, index) => (
        <div
          key={index}
          className=" mb-6 w-full max-w-lg flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <h2 className="text-6xl font-bold text-white">0{step.id}</h2>
            <div>

              <div
                className={`${[1, 3, 5, 7].includes(step.id)
                  ? 'absolute left-1/2 px-20 x-10 '
                  : 'absolute right-1/2 px-20'
                  } `}
              // style={{ top: '30px' }}
              >
                <h2 className="text-4xl font-semibold text-white mb-8">{step.title}</h2>
                <p className="text-slate-500 font-bold text-sm w-9/12 mb-8">{step.content}</p>
                <div>
                  <button className="bg-yellow-500 text-slate-900 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
              <div
                className={`${[2, 4, 6, 8,].includes(step.id)
                  ? 'absolute left-1/2 px-20 x-10 '
                  : 'absolute right-1/2 px-20 x-10'
                  } `}
              // style={{ top: '30px' }}
              >
                <Image
                  src="/About-1/personalized-training.png"
                  alt="Innovative Teaching"
                  width={280}
                  height={280}


                />
              </div>
            </div>
          </div>


          <ProgressBar progress={progress[index]} />
        </div>

      ))}
      <div className="h-1 w-full overflow-hidden rounded-full bg-gray-300" style={{ width: 1 }}></div>
     
    </div>
    <Testimonial/>
    </div>
    </>
  );
};

export default LevelUp;
