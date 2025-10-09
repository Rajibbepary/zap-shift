import { useEffect, useState } from "react";


const TopButton = () => {
     const [visible, setVisible] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    return (
         <button
      onClick={scrollToTop}
      type="button"
      className={`py-2 px-6 bg-[#CAEB66] rounded-sm shadow-lg fixed right-4 bottom-28 transition-all duration-300 hover:bg-[#caeb66cf] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      ↑ Top
    </button>
    );
};

export default TopButton;