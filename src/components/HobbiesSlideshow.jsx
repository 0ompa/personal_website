import { useState } from "react";
import Chess1 from "../assets/Chess1.png"
import Chess2 from "../assets/Chess2.png"
import Chess3 from "../assets/Chess3.png"
import Tennis1 from "../assets/Tennis1.png"
import Tennis2 from "../assets/Tennis2.png"

export function HobbiesSlideshow() {
  const slides = [
    {
      title: "Chess ♟️",
      description: "Chess",
      images: [Chess1, Chess2, Chess3],
      info: "I've been playing chess since I was 5 years old. I enjoy studying openings, tactics, and endgames. I was the president of my high school chess club, and in 2023, our team won 1st place at the Georgia State Championships.",
    },
    {
      title: "Tennis 🎾",
      description: "Tennis",
      images: [Tennis1, Tennis2],
      info: "I love all sports, but tennis is special to me. I've played tennis for over 13 years and played varsity for 3 years in high school. I love to play both singles and doubles, both competitively and for fun. Nowadays, you can find me playing recreationally at Georgia Tech.",
    },
    {
      title: "Sports 🏀⚽🏈",
      description: "basketball",
      images: [],
      info: "Fun fact: I can spin a basketball on my finger and on a chopstick! I love to play sports with friends and watch the NBA, NFL, and UCL.",
    },
    {
      title: "Speedcubing 🧩",
      description: "Speedcubing",
      images: [],
      info: "For the 3x3 Rubik's Cube, my personal best is 11 seconds. Additionally, I can solve the 2x2, 4x4, Pyraminx, and Megaminx cubes. I enjoy learning new algorithms and solving for faster times.",
    },
    {
      title: "News & Current Affairs 🌍",
      description: "News & Current Affairs",
      info: "I like staying informed about headlines around the world, especially in technology, science, industry, and research.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const slide = slides[activeTab];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % slide.images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + slide.images.length) % slide.images.length);

  // Reset image to first when switching tabs
  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentImage(0);
  };

  const hasImages = slide.images && slide.images.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 -mb-px font-semibold border-b-2 transition-all duration-300 ${
              activeTab === index
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className={`bg-gray-800 text-white rounded-lg shadow-lg p-6 flex ${
          hasImages ? "flex-col md:flex-row items-center gap-6" : "flex-col items-center justify-center text-center"
        } relative`}
      >
        {/* Image Slideshow */}
        {hasImages && (
          <div className="md:w-1/2 relative flex justify-center items-center bg-black rounded-lg">
            <img
              src={slide.images[currentImage]}
              alt={`${slide.title} ${currentImage + 1}`}
              className="max-w-full max-h-80 object-contain rounded-lg"
            />

            {/* Arrows */}
            {slide.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full hover:bg-gray-800 transition text-white"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full hover:bg-gray-800 transition text-white"
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        )}

        {/* Info */}
        <div className={`${hasImages ? "md:w-1/2" : "w-full"}`}>
          <h3 className="text-2xl font-bold mb-3">{slide.title}</h3>
          <p className="text-lg">{slide.info}</p>
        </div>
      </div>
    </div>
  );
}
