
// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";

// // // const videos = [
// // //   {
// // //     id: 1,
// // //     title: "Annual College Fest Highlights",
// // //     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
// // //     preview: "/assets/images/img1.jpeg",
// // //     src: "https://www.youtube.com/embed/v30g1TO5D5c",
// // //     isYoutube: true,
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Science Expo 2024",
// // //     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
// // //     preview: "/assets/images/img2.jpeg",
// // //     src: "/assets/videos/science_expo.mp4",
// // //     isYoutube: false,
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Social Awareness Rally",
// // //     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
// // //     preview: "/assets/images/img3.jpeg",
// // //     src: "/assets/videos/social_awareness.mp4",
// // //     isYoutube: false,
// // //   },
// // // ];

// // // const fadeInVariant = {
// // //   hidden: { opacity: 0, y: 50 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // // };

// // // const Videography = () => {
// // //   const [selectedVideo, setSelectedVideo] = useState(null);

// // //   return (
// // //     <div className="container mx-auto p-6">
// // //       {/* Page Title */}
// // //       <motion.h1
// // //         variants={fadeInVariant}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: false }}
// // //         className="text-4xl font-bold text-center my-6 text-gray-800"
// // //       >
// // //         🎬 Videography
// // //       </motion.h1>
// // //       <motion.p
// // //         variants={fadeInVariant}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: false }}
// // //         className="text-center text-gray-600 mb-10 text-lg"
// // //       >
// // //         Explore event highlights and important college moments.
// // //       </motion.p>

// // //       {/* Video Gallery */}
// // //       <motion.div
// // //         variants={fadeInVariant}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: false }}
// // //         className="grid md:grid-cols-3 sm:grid-cols-2 gap-10"
// // //       >
// // //         {videos.map((video) => (
// // //           <motion.div
// // //             key={video.id}
// // //             className="relative group rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer transition duration-300 hover:shadow-xl"
// // //             whileHover={{ scale: 1.05 }}
// // //             onClick={() => setSelectedVideo(video)}
// // //           >
// // //             {/* Preview Image */}
// // //             <img
// // //               className="w-full h-52 object-cover rounded-t-lg group-hover:brightness-75 transition"
// // //               src={video.preview}
// // //               alt={video.title}
// // //             />

// // //            {/* Overlay Play Button at the Top Center */}
// // //            <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2">
// // //                <div className="w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
// // //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
// // //                <path d="M8 5v14l11-7z" />
// // //                 </svg>
// // //              </div>
// // //            </div>




// // //             {/* Card Details */}
// // //             <div className="p-4">
// // //               <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
// // //               <p className="text-sm text-gray-600">{video.desc}</p>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </motion.div>

// // //       {/* Full-Screen Video Modal */}
// // //       {selectedVideo && (
// // //         <motion.div
// // //           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ duration: 0.3 }}
// // //           onClick={() => setSelectedVideo(null)}
// // //         >
// // //           <motion.div
// // //             className="relative w-full max-w-4xl bg-black p-4 rounded-lg shadow-lg"
// // //             initial={{ scale: 0.8 }}
// // //             animate={{ scale: 1 }}
// // //             transition={{ duration: 0.3 }}
// // //             onClick={(e) => e.stopPropagation()}
// // //           >
// // //             {/* Close Button */}
// // //             <button
// // //               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
// // //               onClick={() => setSelectedVideo(null)}
// // //             >
// // //               ✕
// // //             </button>

// // //             {/* Video Display */}
// // //             {selectedVideo.isYoutube ? (
// // //               <iframe
// // //                 className="w-full h-[500px] rounded-md"
// // //                 src={selectedVideo.src}
// // //                 title="YouTube Video"
// // //                 allowFullScreen
// // //               ></iframe>
// // //             ) : (
// // //               <video className="w-full h-auto rounded-md" src={selectedVideo.src} controls autoPlay />
// // //             )}
// // //           </motion.div>
// // //         </motion.div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Videography;





// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // const videos = [
// //   {
// //     id: 1,
// //     title: "Annual College Fest Highlights",
// //     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
// //     preview: "/assets/images/img1.jpeg",
// //     src: "https://www.youtube.com/embed/v30g1TO5D5c",
// //     isYoutube: true,
// //   },
// //   {
// //     id: 2,
// //     title: "Science Expo 2024",
// //     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
// //     preview: "/assets/images/img2.jpeg",
// //     src: "/assets/videos/science_expo.mp4",
// //     isYoutube: false,
// //   },
// //   {
// //     id: 3,
// //     title: "Social Awareness Rally",
// //     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
// //     preview: "/assets/images/img3.jpeg",
// //     src: "/assets/videos/social_awareness.mp4",
// //     isYoutube: false,
// //   },
// // ];

// // const Videography = () => {
// //   const [selectedVideo, setSelectedVideo] = useState(null);

// //   return (
// //     <div className="container mx-auto p-6">
// //       {/* Page Title */}
// //       <motion.h1
// //         initial={{ opacity: 0, y: -30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="text-4xl font-bold text-center my-6 text-gray-800"
// //       >
// //         🎬 Videography
// //       </motion.h1>

// //       <motion.p
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8, delay: 0.2 }}
// //         className="text-center text-gray-600 mb-10 text-lg"
// //       >
// //         Explore event highlights and important college moments.
// //       </motion.p>

// //       {/* Video Gallery with Sequential Animation */}
// //       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
// //         {videos.map((video, index) => (
// //           <motion.div
// //             key={video.id}
// //             className="relative group rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer transition duration-300 hover:shadow-xl"
// //             whileHover={{ scale: 1.05 }}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: index * 0.3 }} // Sequential delay
// //             onClick={() => setSelectedVideo(video)}
// //           >
// //             {/* Preview Image */}
// //             <img
// //               className="w-full h-52 object-cover rounded-t-lg group-hover:brightness-75 transition"
// //               src={video.preview}
// //               alt={video.title}
// //             />

// //             {/* Play Button Overlay */}
// //             <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2">
// //               <div className="w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
// //                 <svg
// //                   className="w-8 h-8 text-white"
// //                   fill="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M8 5v14l11-7z" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Card Details */}
// //             <div className="p-4">
// //               <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
// //               <p className="text-sm text-gray-600">{video.desc}</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Full-Screen Video Modal */}
// //       {selectedVideo && (
// //         <motion.div
// //           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.3 }}
// //           onClick={() => setSelectedVideo(null)}
// //         >
// //           <motion.div
// //             className="relative w-full max-w-4xl bg-black p-4 rounded-lg shadow-lg"
// //             initial={{ scale: 0.8 }}
// //             animate={{ scale: 1 }}
// //             transition={{ duration: 0.3 }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             {/* Close Button */}
// //             <button
// //               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
// //               onClick={() => setSelectedVideo(null)}
// //             >
// //               ✕
// //             </button>

// //             {/* Video Display */}
// //             {selectedVideo.isYoutube ? (
// //               <iframe
// //                 className="w-full h-[500px] rounded-md"
// //                 src={`${selectedVideo.src}?autoplay=1&mute=1`}
// //                 title="YouTube Video"
// //                 allow="autoplay"
// //                 allowFullScreen
// //               ></iframe>
// //             ) : (
// //               <video
// //                 className="w-full h-auto rounded-md"
// //                 src={selectedVideo.src}
// //                 controls
// //                 autoPlay
// //               />
// //             )}
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Videography;



// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // const videos = [
// //   {
// //     id: 1,
// //     title: "Annual College Fest Highlights",
// //     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
// //     preview: "/assets/images/img1.jpeg",
// //     src: "https://www.youtube.com/embed/v30g1TO5D5c",
// //     isYoutube: true,
// //   },
// //   {
// //     id: 2,
// //     title: "Science Expo 2024",
// //     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
// //     preview: "/assets/images/img2.jpeg",
// //     src: "/assets/videos/science_expo.mp4",
// //     isYoutube: false,
// //   },
// //   {
// //     id: 3,
// //     title: "Social Awareness Rally",
// //     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
// //     preview: "/assets/images/img3.jpeg",
// //     src: "/assets/videos/social_awareness.mp4",
// //     isYoutube: false,
// //   },
// //   {
// //     id: 3,
// //     title: "Annual College Fest Highlights",
// //     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
// //     preview: "/assets/images/img2.jpeg",
// //     src: "https://www.youtube.com/embed/v30g1TO5D5c",
// //     isYoutube: true,
// //   },
//   // {
//   //   id: 4,
//   //   title: "Science Expo 2024",
//   //   desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
//   //   preview: "/assets/images/img4.jpeg",
//   //   src: "/assets/videos/science_expo.mp4",
//   //   isYoutube: false,
//   // },
//   // {
//   //   id: 5,
//   //   title: "Social Awareness Rally",
//   //   desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
//   //   preview: "/assets/images/img1.jpeg",
//   //   src: "/assets/videos/social_awareness.mp4",
//   //   isYoutube: false,
//   // },
//   // {
//   //   id: 6,
//   //   title: "Annual College Fest Highlights",
//   //   desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
//   //   preview: "/assets/images/img1.jpeg",
//   //   src: "https://www.youtube.com/embed/v30g1TO5D5c",
//   //   isYoutube: true,
//   // },
//   // {
//   //   id: 7,
//   //   title: "Science Expo 2024",
//   //   desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
//   //   preview: "/assets/images/img2.jpeg",
//   //   src: "/assets/videos/science_expo.mp4",
//   //   isYoutube: false,
//   // },
//   // {
//   //   id: 8,
//   //   title: "Social Awareness Rally",
//   //   desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
//   //   preview: "/assets/images/img3.jpeg",
//   //   src: "/assets/videos/social_awareness.mp4",
//   //   isYoutube: false,
//   // }
// // ];

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.5 }, // Cards appear one by one
// //   },
// // };

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// // };

// // const Videography = () => {
// //   const [selectedVideo, setSelectedVideo] = useState(null);

// //   return (
// //     <div className="container mx-auto p-6">
// //       {/* Page Title */}
// //       <motion.h1
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         className="text-4xl font-bold text-center my-6 text-gray-800"
// //       >
// //         🎬 Videography
// //       </motion.h1>
// //       <motion.p
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1 }}
// //         className="text-center text-gray-600 mb-10 text-lg"
// //       >
// //         Explore event highlights and important college moments.
// //       </motion.p>

// //       {/* Video Gallery with Staggered Animation */}
// //       <motion.div
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //         className="grid md:grid-cols-3 sm:grid-cols-2 gap-10"
// //       >
// //         {videos.map((video, index) => (
// //           <motion.div
// //             key={video.id}
// //             variants={cardVariants}
// //             className="relative group rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer transition duration-300 hover:shadow-xl"
// //             whileHover={{ scale: 1.05 }}
// //             onClick={() => setSelectedVideo(video)}
// //           >
// //             {/* Preview Image */}
// //             <img
// //               className="w-full h-52 object-cover rounded-t-lg group-hover:brightness-75 transition"
// //               src={video.preview}
// //               alt={video.title}
// //             />

// //             {/* Overlay Play Button */}
// //             <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2">
// //               <div className="w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
// //                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
// //                   <path d="M8 5v14l11-7z" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Card Details */}
// //             <div className="p-4">
// //               <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
// //               <p className="text-sm text-gray-600">{video.desc}</p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </motion.div>

// //       {/* Full-Screen Video Modal */}
// //       {selectedVideo && (
// //         <motion.div
// //           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.3 }}
// //           onClick={() => setSelectedVideo(null)}
// //         >
// //           <motion.div
// //             className="relative w-full max-w-4xl bg-black p-4 rounded-lg shadow-lg"
// //             initial={{ scale: 0.8 }}
// //             animate={{ scale: 1 }}
// //             transition={{ duration: 0.3 }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             {/* Close Button */}
// //             <button
// //               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
// //               onClick={() => setSelectedVideo(null)}
// //             >
// //               ✕
// //             </button>

// //             {/* Video Display */}
// //             {selectedVideo.isYoutube ? (
// //               <iframe
// //                 className="w-full h-[500px] rounded-md"
// //                 src={selectedVideo.src}
// //                 title="YouTube Video"
// //                 allowFullScreen
// //               ></iframe>
// //             ) : (
// //               <video className="w-full h-auto rounded-md" src={selectedVideo.src} controls autoPlay />
// //             )}
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Videography;



// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const videos = [
//   {
//     id: 1,
//     title: "Annual College Fest Highlights",
//     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
//     preview: "/assets/images/img1.jpeg",
//     src: "https://www.youtube.com/embed/v30g1TO5D5c",
//     isYoutube: true,
//   },
//   {
//     id: 2,
//     title: "Science Expo 2024",
//     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
//     preview: "/assets/images/img2.jpeg",
//     src: "/assets/videos/science_expo.mp4",
//     isYoutube: false,
//   },
//   {
//     id: 3,
//     title: "Social Awareness Rally",
//     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
//     preview: "/assets/images/img3.jpeg",
//     src: "/assets/videos/social_awareness.mp4",
//     isYoutube: false,
//   },
//   {
//     id: 4,
//     title: "Science Expo 2024",
//     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
//     preview: "/assets/images/img4.jpeg",
//     src: "/assets/videos/science_expo.mp4",
//     isYoutube: false,
//   },
//   {
//     id: 5,
//     title: "Social Awareness Rally",
//     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
//     preview: "/assets/images/img1.jpeg",
//     src: "/assets/videos/social_awareness.mp4",
//     isYoutube: false,
//   },
//   {
//     id: 6,
//     title: "Annual College Fest Highlights",
//     desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
//     preview: "/assets/images/img1.jpeg",
//     src: "https://www.youtube.com/embed/v30g1TO5D5c",
//     isYoutube: true,
//   },
//   {
//     id: 7,
//     title: "Science Expo 2024",
//     desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
//     preview: "/assets/images/img2.jpeg",
//     src: "/assets/videos/science_expo.mp4",
//     isYoutube: false,
//   },
//   {
//     id: 8,
//     title: "Social Awareness Rally",
//     desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
//     preview: "/assets/images/img3.jpeg",
//     src: "/assets/videos/social_awareness.mp4",
//     isYoutube: false,
//   }
// ];

// const Videography = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <div className="container mx-auto p-6">
//       {/* Page Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl font-bold text-center my-6 text-gray-800"
//       >
//         🎬 Videography
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-center text-gray-600 mb-10 text-lg"
//       >
//         Explore event highlights and important college moments.
//       </motion.p>

//       {/* Video Gallery with Sequential Animation */}
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
//         {videos.map((video, index) => (
//           <motion.div
//             key={video.id}
//             className="relative group rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer transition duration-300 hover:shadow-xl"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6, delay: index * 0.3 }} // Sequential delay
//             onClick={() => setSelectedVideo(video)}
//           >
//             {/* Preview Image */}
//             <img
//               className="w-full h-52 object-cover rounded-t-lg group-hover:brightness-75 transition"
//               src={video.preview}
//               alt={video.title}
//             />

//             {/* Play Button Overlay */}
//             <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2">
//               <div className="w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
//                 <svg
//                   className="w-8 h-8 text-white"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Card Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
//               <p className="text-sm text-gray-600">{video.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Full-Screen Video Modal */}
//       {selectedVideo && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           onClick={() => setSelectedVideo(null)}
//         >
//           <motion.div
//             className="relative w-full max-w-4xl bg-black p-4 rounded-lg shadow-lg"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
//               onClick={() => setSelectedVideo(null)}
//             >
//               ✕
//             </button>

//             {/* Video Display */}
//             {selectedVideo.isYoutube ? (
//               <iframe
//                 className="w-full h-[500px] rounded-md"
//                 src={`${selectedVideo.src}?autoplay=1&mute=1`}
//                 title="YouTube Video"
//                 allow="autoplay"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <video
//                 className="w-full h-auto rounded-md"
//                 src={selectedVideo.src}
//                 controls
//                 autoPlay
//               />
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Videography;


import React, { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Annual College Fest Highlights",
    desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
    preview: "/assets/images/img1.jpeg",
    src: "https://www.youtube.com/embed/v30g1TO5D5c",
    isYoutube: true,
  },
  {
    id: 2,
    title: "Science Expo 2024",
    desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
    preview: "/assets/images/img2.jpeg",
    src: "/assets/videos/science_expo.mp4",
    isYoutube: false,
  },
  {
    id: 3,
    title: "Social Awareness Rally",
    desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
    preview: "/assets/images/img3.jpeg",
    src: "/assets/videos/social_awareness.mp4",
    isYoutube: false,
  },
    {
    id: 4,
    title: "Science Expo 2024",
    desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
    preview: "/assets/images/img4.jpeg",
    src: "/assets/videos/science_expo.mp4",
    isYoutube: false,
  },
  {
    id: 5,
    title: "Social Awareness Rally",
    desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
    preview: "/assets/images/img1.jpeg",
    src: "/assets/videos/social_awareness.mp4",
    isYoutube: false,
  },
  {
    id: 6,
    title: "Annual College Fest Highlights",
    desc: "A glimpse of the amazing performances, cultural events, and student participation in our annual college fest.",
    preview: "/assets/images/img1.jpeg",
    src: "https://www.youtube.com/embed/v30g1TO5D5c",
    isYoutube: true,
  },
  {
    id: 7,
    title: "Science Expo 2024",
    desc: "Students showcase their innovative projects and research in the annual Science Expo event.",
    preview: "/assets/images/img2.jpeg",
    src: "/assets/videos/science_expo.mp4",
    isYoutube: false,
  },
  {
    id: 8,
    title: "Social Awareness Rally",
    desc: "A social campaign conducted by students to spread awareness about environmental conservation.",
    preview: "/assets/images/img3.jpeg",
    src: "/assets/videos/social_awareness.mp4",
    isYoutube: false,
  }
];

const Videography = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
                
        className="text-4xl font-bold text-center my-6 text-gray-800"
      >
        🎬 Videography
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-gray-600 mb-10 text-lg"
      >
        Explore event highlights and important college moments.
      </motion.p>

      {/* Video Gallery with Parallel Animation */}
<motion.div
  className="grid md:grid-cols-3 sm:grid-cols-2 gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
  }}
  
>
  {videos.map((video) => (
   <motion.div
   key={video.id}
   className="relative group rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 cursor-pointer transition duration-300 hover:shadow-xl"
   whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: false, amount: 0.3 }} // Animation triggers every time
   transition={{ duration: 0.4 }} // Smooth & quick animation
   onClick={() => setSelectedVideo(video)}
 >
 
      {/* Preview Image */}
      <img
        className="w-full h-52 object-cover rounded-t-lg group-hover:brightness-75 transition"
        src={video.preview}
        alt={video.title}
      />

      {/* Play Button Overlay */}
      <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-16 bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
        <p className="text-sm text-gray-600">{video.desc}</p>
      </div>
    </motion.div>
  ))}
</motion.div>


      {/* Full-Screen Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-black p-4 rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            {/* Video Display */}
            {selectedVideo.isYoutube ? (
              <iframe
                className="w-full h-[500px] rounded-md"
                src={`${selectedVideo.src}?autoplay=1&mute=1`}
                title="YouTube Video"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-auto rounded-md"
                src={selectedVideo.src}
                controls
                autoPlay
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Videography;
