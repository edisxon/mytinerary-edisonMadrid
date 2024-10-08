import { useState } from "react";

const Carousel = ({ cities }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(cities.length / 4) - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(cities.length / 4) - 1 ? 0 : prevSlide + 1
    );
  };


  const slides = [];
  for (let i = 0; i < cities.length; i += 4) {
    slides.push(cities.slice(i, i + 4))
  }

  return (
    <div className="relative w-full lg:w-3/4">
 
      <button
        onClick={handlePrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-300 text-slate-800  p-2 rounded-full z-50"
      >
      &#10094;&#10094;
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full grid grid-cols-2 gap-4 p-4">
              {slide.map((city) => (
                <div
                  key={city.id}
                  className="p-2 flex flex-col items-center bg-white shadow-lg rounded-lg"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full lg:h-72 object-cover rounded-md"
                  />
                  <p className="mt-2 text-center font-semibold text-gray-700">
                    {city.name}, {city.country}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-300 text-slate-800 p-2 rounded-full z-50"
      >
      &#10095;&#10095;
      </button>
      <div className="flex justify-center b">
        <button>All cities</button>
      </div>
      
    </div>

  );
};

export default Carousel;

