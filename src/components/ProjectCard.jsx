import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

export function ProjectCard({ title, description, images, technologies, liveUrl, githubUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Small Card */}
      <div
        className="card cursor-pointer overflow-hidden group hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold p-2">
            <span className="text-center break-words leading-snug">{title}</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative bg-gray-900 text-white rounded-xl shadow-2xl w-3/4 h-3/4 flex flex-col lg:flex-row overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800 transition z-50"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left: Image Slideshow */}
            <div className="lg:w-2/3 w-full h-full relative flex items-center justify-center bg-black">
              <img
                src={images[currentImage] || "/placeholder.svg"}
                alt={`${title} ${currentImage + 1}`}
                className="w-full h-full object-contain transition-transform duration-500"
              />

              {/* Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full hover:bg-gray-800 transition text-white z-10"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full hover:bg-gray-800 transition text-white z-10"
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="lg:w-1/3 w-full p-6 lg:p-8 flex flex-col gap-4 overflow-auto">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-lg">{description}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-primary-light text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    See More
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
