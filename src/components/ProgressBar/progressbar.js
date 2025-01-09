import React, { useState, useEffect } from "react";
import "../../styles/progressBar.css"; 

const ProgressBar = () => {
  const [progress, setProgress] = useState(0); 

  const handleScroll = () => {
    
    if (progress < 100) {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // Add 10% or stop at 100%
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures the effect runs only once

  return (
    <div className="flex flex-col items-center">
      <div className="mb-5 flex flex-col items-center stepper-item">
        <div className="h-[400px]  overflow-hidden rounded-full bg-gray-300" style={{width:1}}>
          <div
            className="h-full bg-purple-800 relative transition-all duration-1000 ease-in-out" // CSS transition added here
            style={{ height: `${progress}%` }}
          >
            {/* The progress bar will fill by 10% on each scroll */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
