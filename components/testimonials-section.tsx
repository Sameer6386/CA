import React, { useState } from "react";

const testimonials = [
  {
    text: "Zolvit is exactly what it does. Legal is simple. We went to Zolvit to register our Trademark during the lockdown and everything was done online with ease. We never even had to step out of the house. It was truly a digital experience.",
    author: "Adarsh Agarwal",
    position: "CEO & Developer of Golghar.com",
    image: "/testimonial1.jpg",
  },
  {
    text: "Outstanding service! The process was incredibly streamlined and efficient. Their digital platform made everything so convenient.",
    author: "Sarah Chen",
    position: "Founder of TechStart",
    image: "/testimonial1.jpg",
  },
  {
    text: "The best legal service platform I've ever used. Their attention to detail and customer service is exceptional.",
    author: "Michael Rodriguez",
    position: "Director at InnovateCorp",
    image: "/testimonial1.jpg",
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-yellow-400 rounded-2xl p-12 max-w-4xl relative">
        <div className="flex gap-8 items-start min-h-[200px]">
          <div className="w-32 h-32 flex-shrink-0">
            <img
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              className={`w-full h-full rounded-full object-cover transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            />
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <p
              className={`text-xl text-gray-900 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            >
              {testimonials[currentIndex].text}
            </p>
            <div
              className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            >
              <h3 className="font-bold text-lg text-gray-900">
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-gray-800">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
