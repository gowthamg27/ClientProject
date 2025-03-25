
import { motion } from "framer-motion";
import { useState, memo } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const galleryImages = [
    { id: 1, src: "/assets/images/img1.jpeg", alt: "National Science Seminar", category: "Seminar" },
    { id: 2, src: "/assets/images/img2.jpeg", alt: "Research Paper Presentation", category: "Research" },
    { id: 3, src: "/assets/images/img3.jpeg", alt: "Guest Lecture on AI", category: "Lecture" },
    { id: 4, src: "/assets/images/img2.jpeg", alt: "Best Faculty Award Ceremony", category: "Award" },
    { id: 5, src: "/assets/images/img4.jpeg", alt: "International Conference", category: "Conference" },
    { id: 6, src: "/assets/images/img3.jpeg", alt: "College Annual Function", category: "College Event" },
    { id: 7, src: "/assets/images/img2.jpeg", alt: "Research Project Inauguration", category: "Research" },
    { id: 8, src: "/assets/images/img4.jpeg", alt: "Workshop on Machine Learning", category: "Workshop" },
    { id: 9, src: "/assets/images/img1.jpeg", alt: "Department Technical Fest", category: "College Event" },
    { id: 21, src: "/assets/images/img1.jpeg", alt: "National Science Seminar", category: "Seminar" },
    { id: 22, src: "/assets/images/img2.jpeg", alt: "Research Paper Presentation", category: "Research" },
    { id: 23, src: "/assets/images/img3.jpeg", alt: "Guest Lecture on AI", category: "Lecture" },
    { id: 24, src: "/assets/images/img2.jpeg", alt: "Best Faculty Award Ceremony", category: "Award" },
    { id: 25, src: "/assets/images/img4.jpeg", alt: "International Conference", category: "Conference" },
    { id: 26, src: "/assets/images/img3.jpeg", alt: "College Annual Function", category: "College Event" },
    { id: 27, src: "/assets/images/img2.jpeg", alt: "Research Project Inauguration", category: "Research" },
    { id: 28, src: "/assets/images/img4.jpeg", alt: "Workshop on Machine Learning", category: "Workshop" },
    { id: 29, src: "/assets/images/img1.jpeg", alt: "Department Technical Fest", category: "College Event" }
  ];

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">
      
       <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
                      
              className="text-4xl font-bold text-center my-5 text-gray-800"
            >
              Photo gallery
              </motion.h1>
    
         <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-gray-600 mb-10 text-lg"
              >
        A visual journey through academic milestones, research, and professional achievements.
        </motion.p>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        {["All", "Seminar", "Research", "Lecture", "Award", "Conference", "College Event", "Workshop"].map(category => (
          <button 
            key={category}
            className={`px-4 py-2 rounded-lg border transition ${
              filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredImages.map((image, index) => (
          <motion.div 
            key={image.id} 
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.85 }}
            transition={{ delay: (index % 10) * 0.05, duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} 
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />

            {/* Event Name Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
              <p className="text-lg font-semibold">{image.alt}</p>
              <p className="text-sm mt-1">Explore this moment</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
  <motion.div 
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedImage(null)}  // Close on click outside
  >
    <div className="relative">
      {/* Close Button */}
      <button 
  className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
  onClick={() => setSelectedImage(null)}
>
  ✕
</button>



      {/* Full-Screen Image */}  
<motion.img  
  src={selectedImage.src}  
  alt={selectedImage.alt}  
  className="w-[calc(90vw-25px)] h-[calc(90vh-25px)] object-cover rounded-lg"  
  initial={{ scale: 0.8 }}  
  animate={{ scale: 1 }}  
  exit={{ scale: 0.8 }}  
/>

    </div>
  </motion.div>
)}

    </div>
  );
};

export default memo(Gallery);  // Memoized for performance
