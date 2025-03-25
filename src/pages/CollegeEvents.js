
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const events = [
    {
      id: 1,
      title: "Annual Science Conference 2024",
      date: "March 15-17, 2024",
      description:
        "Led a panel discussion on quantum computing applications in modern science and hosted a workshop on advanced research methodologies.",
      venue: "University Auditorium",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/images/img${i + 1}.jpeg`,
        alt: `Event image ${i + 1}`,
      })),
    },
    {
      id: 2,
      title: "International Physics Symposium",
      date: "December 5-8, 2023",
      description:
        "Presented groundbreaking research on quantum entanglement and participated in collaborative sessions with international researchers.",
      venue: "Science Convention Center",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/images/img${i + 1}.jpeg`,
        alt: `Symposium image ${i + 1}`,
      })),
    },
    {
      id: 3,
      title: "International Physics Symposium",
      date: "December 5-8, 2023",
      description:
        "Presented groundbreaking research on quantum entanglement and participated in collaborative sessions with international researchers.",
      venue: "Science Convention Center",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/images/img${i + 1}.jpeg`,
        alt: `Symposium image ${i + 1}`,
      })),
    },
    {
      id: 3,
      title: "International Physics Symposium",
      date: "December 5-8, 2023",
      description:
        "Presented groundbreaking research on quantum entanglement and participated in collaborative sessions with international researchers.",
      venue: "Science Convention Center",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/images/img${i + 1}.jpeg`,
        alt: `Symposium image ${i + 1}`,
      })),
    },
    {
      id: 1,
      title: "Annual Science Conference 2024",
      date: "March 15-17, 2024",
      description:
        "Led a panel discussion on quantum computing applications in modern science and hosted a workshop on advanced research methodologies.",
      venue: "University Auditorium",
      images: Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/images/img${i + 1}.jpeg`,
        alt: `Event image ${i + 1}`,
      })),
    }
  ];

  const openEventGallery = (event) => {
    setSelectedEvent(event);
    setSelectedImageIndex(null); // Ensure grid mode opens first
  };

  const closeEventGallery = () => {
    setSelectedEvent(null);
    setSelectedImageIndex(null);
  };

  const openFullScreen = (index) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    if (selectedEvent && selectedImageIndex < selectedEvent.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedEvent && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className=" container mx-auto p-6 min-h-screen bg-gray-100 ">
      <motion.h1
        className="text-4xl font-bold text-center my-5 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        College Events
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Explore the highlights of academic events, conferences, and workshops.
      </motion.p>

      <div className="space-y-10">
        {events.map((event, index) => (
          <motion.div
          key={event.id}
          className={`bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.2 }} // Removed "once: true"
        >
        
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {event.date} • {event.venue}
              </p>
              <p className="mt-3 text-gray-600">{event.description}</p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-2 relative">
              {event.images.slice(0, 4).map((image, idx) => (
                <motion.div
                  key={idx}
                  className="h-32 rounded-lg overflow-hidden shadow-md cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onClick={() => openFullScreen(idx)}
                  />
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  className="text-white text-lg font-semibold px-4 py-2 bg-blue-600 rounded-lg"
                  onClick={() => openEventGallery(event)}
                >
                  View More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 px-5">
            <button
              className="absolute top-5 right-5 text-white hover:text-gray-300"
              onClick={closeEventGallery}
            >
              <X size={30} />
            </button>

            {/* Show Image Grid if No Image is Selected */}
            {selectedImageIndex === null ? (
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {selectedEvent.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="cursor-pointer rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openFullScreen(idx)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Show Full-Screen Image if an Image is Selected
              <div className="relative flex items-center justify-center">
                <button
                  className="absolute left-5 text-white hover:text-gray-300"
                  onClick={prevImage}
                  disabled={selectedImageIndex === 0}
                >
                  <ChevronLeft size={40} />
                </button>
                <motion.img
                    key={selectedEvent.images[selectedImageIndex].src}
                    src={selectedEvent.images[selectedImageIndex].src}
                    alt={selectedEvent.images[selectedImageIndex].alt}
                    className="w-[calc(90vw-25px)] h-[calc(90vh-25px)] object-cover rounded-lg"  
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  />


                <button
                  className="absolute right-5 text-white hover:text-gray-300"
                  onClick={nextImage}
                  disabled={selectedImageIndex === selectedEvent.images.length - 1}
                >
                  <ChevronRight size={40} />
                </button>
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
