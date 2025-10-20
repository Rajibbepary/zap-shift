import { useState } from "react";


const About = () => {
   const [isVisible, setIsVisible] = useState(false);
  
   return (
   <div className="text-center mt-5">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isVisible ? "Hide" : "Show"} Message
      </button>

      {isVisible && <p className="mt-3">👋 হ্যালো রাজিব, React-এ তোমাকে স্বাগতম!</p>}
    </div>
  );
 
};

export default About;