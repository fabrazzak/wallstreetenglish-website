"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Joud",
    rating: 5,
    title: "Wall Street English",
    text: "Wall Street English helped me to speak confidently and fluently, the teachers are very kind and helpful, they filled the lack of confidence in my spea...",
    date: "10.09.2024",
  },
  {
    name: "Carlos Rafael",
    rating: 5,
    title: "Wall Street English",
    text: "Belonging to Wall Street English has been one of the best decisions of my life. The teachers with whom I have had my class encounters truly excel in a...",
    date: "26.08.2024",
  },
  {
    name: "Sara Ahmed",
    rating: 5,
    title: "Wall Street English",
    text: "The experience at Wall Street English is amazing. The environment is supportive and interactive, making learning much easier and fun.",
    date: "05.08.2024",
  },
  {
    name: "David Kim",
    rating: 5,
    title: "Wall Street English",
    text: "I improved my English quickly thanks to the practical lessons and great teachers. Highly recommend it to everyone who wants to grow.",
    date: "12.07.2024",
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  // Handle responsive number of items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIndex = index * itemsPerSlide;
  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section className="w-full bg-white py-12 md:py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-4">
          We've helped over 3 million students go further
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-8 md:mt-10 text-[#003366]">
          <p className="text-sm md:text-lg">EXCELLENT</p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="md:w-5 md:h-5" fill="currentColor" />
            ))}
          </div>
          <span className="mx-1 md:mx-2 text-gray-500">|</span>
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">4.78 Average</span> &nbsp; 1259 Reviews
          </p>
          <img
            src="https://cdn.trustindex.io/assets/platform/Reviewsio/logo.svg"
            alt="Reviews.io"
            className="h-5 md:h-6 ml-1 md:ml-2"
          />
        </div>

        <hr className="opacity-30 mx-2 md:mx-6 mt-3 md:mt-4" />
        
        <div className="relative flex justify-center items-center mt-6 md:mt-8">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-8 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft size={42} className="text-gray-400" />
          </button>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="md:hidden absolute -left-2 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft size={32} className="text-gray-400" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 transition-all duration-500 w-full">
            {visibleReviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 md:p-6 text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <p className="text-[#003366] font-semibold text-sm md:text-base">{review.name}</p>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} className="md:w-4 md:h-4" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm mt-1 text-gray-500 mb-3 md:mb-4">{review.title}</p>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">{review.text}</p>
                <p className="text-gray-400 text-xs mt-3 md:mt-4 text-end">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-8 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight size={42} className="text-gray-400" />
          </button>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={handleNext}
            className="md:hidden absolute -right-2 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight size={32} className="text-gray-400" />
          </button>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-[#003366]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}