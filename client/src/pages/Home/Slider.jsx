import { useEffect, useState } from "react";
import assets from "../../assets/assets";


const Slider = () => {
 const sliderData = [
    {
      id: 1,
      imgSrc:assets.banner1
    },
    {
      id: 2,
      imgSrc: assets.banner2
    },
    {
      id: 3,
      imgSrc:assets.banner3
    },
  ];

const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
    return (
         <div className="overflow-hidden relative w-11/12 mx-auto ">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {sliderData.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="flex flex-col-reverse md:flex-row  justify-between py-4 min-w-full"
                  >
                      <img
                        className="w-full h-full object-cover"
                        src={slide.imgSrc}
                        alt={`Slide ${index + 1}`}
                      />
                  </div>
                ))}
              </div>
        
              <div className="flex items-center justify-center gap-2 md:mt-4">
                {sliderData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      currentSlide === index ? "bg-[#CAEB66]" : "bg-gray-500/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
    );
};

export default Slider;