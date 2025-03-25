// // // // // src/pages/Research.js
// // // // import React from "react";

// // // // const researchPapers = [
// // // //   { id: 1, title: "AI in Healthcare", author: "Dr. Richardson", year: 2023, file: "/assets/research/research1.pdf" },
// // // //   { id: 2, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
// // // //   { id: 3, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
// // // // ];

// // // // const Research = () => {
// // // //   return (
// // // //     <div className="container mx-auto p-6">
// // // //       <h1 className="text-3xl font-bold text-center my-6">PhD Research & Publications</h1>
// // // //       <p className="text-center text-gray-600 mb-6">
// // // //         A collection of research work and published papers.
// // // //       </p>

// // // //       <div className="bg-white shadow-lg rounded-lg p-6">
// // // //         <table className="w-full border-collapse border border-gray-300">
// // // //           <thead>
// // // //             <tr className="bg-gray-200">
// // // //               <th className="p-3 border">Title</th>
// // // //               <th className="p-3 border">Author</th>
// // // //               <th className="p-3 border">Year</th>
// // // //               <th className="p-3 border">Download</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {researchPapers.map((paper) => (
// // // //               <tr key={paper.id} className="text-center border-b">
// // // //                 <td className="p-3 border">{paper.title}</td>
// // // //                 <td className="p-3 border">{paper.author}</td>
// // // //                 <td className="p-3 border">{paper.year}</td>
// // // //                 <td className="p-3 border">
// // // //                   <a href={paper.file} download className="text-blue-600 hover:underline">
// // // //                     Download
// // // //                   </a>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //     <div>
// // // //       <br/>
// // // //       <section className="current-research">
// // // //         <h2>Current Research Projects</h2>
// // // //         <div className="research-cards">
// // // //           <div className="research-card">
// // // //             <h3>Quantum Entanglement in Materials</h3>
// // // //             <p>Investigating quantum properties in newly synthesized materials and their potential applications in next-generation computing systems.</p>
// // // //           </div>
          
// // // //           <div className="research-card">
// // // //             <h3>Artistic Visualization of Quantum Phenomena</h3>
// // // //             <p>Developing new methods to represent complex quantum behaviors through visual art, enhancing understanding and communication of abstract concepts.</p>
// // // //           </div>
          
// // // //           <div className="research-card">
// // // //             <h3>Educational Approaches in Advanced Physics</h3>
// // // //             <p>Researching innovative pedagogical methods to make quantum physics more accessible to undergraduate students.</p>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //       </div>
// // // //     </div>
    
// // // //   );
// // // // };

// // // // export default Research;


// // // import React from "react";

// // // const researchPapers = [
// // //   { id: 1, title: "AI in Healthcare", author: "Dr. Richardson", year: 2023, file: "/assets/research/research1.pdf" },
// // //   { id: 2, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
// // //   { id: 3, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
// // // ];

// // // const Research = () => {
// // //   return (
// // //     <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-10 px-6">
// // //       <div className="max-w-5xl mx-auto">
// // //         {/* Page Title */}
// // //         <h1 className="text-4xl font-bold text-center text-gray-800">PhD Research & Publications</h1>
// // //         <p className="text-center text-gray-600 mt-3 mb-10">
// // //           A collection of research work and published papers.
// // //         </p>

// // //         {/* Research Papers Grid */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {researchPapers.map((paper) => (
// // //             <div key={paper.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition duration-300">
// // //               <h3 className="text-lg font-semibold text-gray-800">{paper.title}</h3>
// // //               <p className="text-gray-600 text-sm mt-1">By {paper.author} - {paper.year}</p>
// // //               <a 
// // //                 href={paper.file} 
// // //                 download 
// // //                 className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
// // //               >
// // //                 Download PDF
// // //               </a>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Current Research Section */}
// // //         <section className="mt-16">
// // //           <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Current Research Projects</h2>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// // //               <h3 className="text-lg font-semibold text-gray-800">Quantum Entanglement in Materials</h3>
// // //               <p className="text-gray-600 text-sm mt-2">
// // //                 Investigating quantum properties in newly synthesized materials for next-generation computing systems.
// // //               </p>
// // //             </div>

// // //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// // //               <h3 className="text-lg font-semibold text-gray-800">Artistic Visualization of Quantum Phenomena</h3>
// // //               <p className="text-gray-600 text-sm mt-2">
// // //                 Developing new methods to visually represent complex quantum behaviors.
// // //               </p>
// // //             </div>

// // //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// // //               <h3 className="text-lg font-semibold text-gray-800">Educational Approaches in Advanced Physics</h3>
// // //               <p className="text-gray-600 text-sm mt-2">
// // //                 Researching innovative teaching methods to make quantum physics more accessible.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Research;

// // import React from "react";

// // const researchPapers = [
// //   { id: 1, title: "AI in Healthcare", author: "Dr. Richardson", year: 2023, file: "/assets/research/research1.pdf" },
// //   { id: 2, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
// //   { id: 3, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
// // ];

// // const Research = () => {
// //   return (
// //     <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-10 px-6">
// //       <div className="max-w-5xl mx-auto">
// //         {/* Page Title */}
// //         <h1 className="text-3xl font-bold text-center text-gray-800 my-6">PhD Research & Publications</h1>
// //         <p className="text-center text-gray-600 mb-6">
// //           A collection of research work and published papers.
// //         </p>

// //         {/* Research Papers Table */}
// //         <div className="bg-white shadow-lg rounded-lg p-6">
// //           <table className="w-full border-collapse border border-gray-300">
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th className="p-3 border">Title</th>
// //                 <th className="p-3 border">Author</th>
// //                 <th className="p-3 border">Year</th>
// //                 <th className="p-3 border">Download</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {researchPapers.map((paper) => (
// //                 <tr key={paper.id} className="text-center border-b">
// //                   <td className="p-3 border">{paper.title}</td>
// //                   <td className="p-3 border">{paper.author}</td>
// //                   <td className="p-3 border">{paper.year}</td>
// //                   <td className="p-3 border">
// //                     <a href={paper.file} download className="text-blue-600 hover:underline">
// //                       Download
// //                     </a>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Current Research Projects */}
// //         <section className="mt-10">
// //           <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Current Research Projects</h2>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// //               <h3 className="text-lg font-semibold text-gray-800">Quantum Entanglement in Materials</h3>
// //               <p className="text-gray-600 text-sm mt-2">
// //                 Investigating quantum properties in newly synthesized materials for next-generation computing systems.
// //               </p>
// //             </div>

// //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// //               <h3 className="text-lg font-semibold text-gray-800">Artistic Visualization of Quantum Phenomena</h3>
// //               <p className="text-gray-600 text-sm mt-2">
// //                 Developing new methods to visually represent complex quantum behaviors.
// //               </p>
// //             </div>

// //             <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
// //               <h3 className="text-lg font-semibold text-gray-800">Educational Approaches in Advanced Physics</h3>
// //               <p className="text-gray-600 text-sm mt-2">
// //                 Researching innovative teaching methods to make quantum physics more accessible.
// //               </p>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Research;


// import React from "react";
// import { motion } from "framer-motion";

// const researchPapers = [
//   { id: 1, title: "AI in Healthcare", author: "Dr. Richardson", year: 2023, file: "/assets/research/research1.pdf" },
//   { id: 2, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
//   { id: 3, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
// ];

// const projects = [
//   {
//     id: 1,
//     title: "Quantum Entanglement in Materials",
//     description: "Investigating quantum properties in newly synthesized materials for next-generation computing systems.",
//   },
//   {
//     id: 2,
//     title: "Artistic Visualization of Quantum Phenomena",
//     description: "Developing new methods to visually represent complex quantum behaviors.",
//   },
//   {
//     id: 3,
//     title: "Educational Approaches in Advanced Physics",
//     description: "Researching innovative teaching methods to make quantum physics more accessible.",
//   },
// ];

// const Research = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Page Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center text-gray-800 mb-6"
//         >
//           📖 PhD Research & Publications
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-center text-gray-600 text-lg mb-10"
//         >
//           A collection of research work and ongoing projects.
//         </motion.p>

//         {/* Research Papers - Animated Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {researchPapers.map((paper, index) => (
//             <motion.div
//               key={paper.id}
//               className="bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition duration-300 cursor-pointer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.15 }}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">{paper.title}</h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 <span className="font-medium text-gray-700">Author:</span> {paper.author}
//               </p>
//               <p className="text-gray-600 text-sm mt-1">
//                 <span className="font-medium text-gray-700">Year:</span> {paper.year}
//               </p>
//               <div className="mt-4">
//                 <a
//                   href={paper.file}
//                   download
//                   className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
//                 >
//                   📥 Download Paper
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Current Research Projects Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-16"
//         >
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//             🔬 Current Research Projects
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 className="bg-white shadow-md rounded-lg p-6 border border-gray-200 group cursor-pointer transition duration-300 hover:shadow-xl hover:scale-105"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.15 }}
//               >
//                 <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
//                 <p className="text-gray-600 text-sm mt-2">{project.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default Research;

import React from "react";
import { motion } from "framer-motion";

const researchPapers = [
  { id: 1, title: "AI in Healthcare", author: "Dr. Richardson", year: 2023, file: "/assets/research/research1.pdf" },
  { id: 2, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
  { id: 3, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
  { id: 4, title: "Machine Learning Trends", author: "Dr. Richardson", year: 2022, file: "/assets/research/research2.pdf" },
  { id: 5, title: "Deep Learning & Vision", author: "Dr. Richardson", year: 2021, file: "/assets/research/research3.pdf" },
];

const projects = [
  {
    id: 1,
    title: "Quantum Entanglement in Materials",
    description: "Investigating quantum properties in newly synthesized materials for next-generation computing systems.",
  },
  {
    id: 2,
    title: "Artistic Visualization of Quantum Phenomena",
    description: "Developing new methods to visually represent complex quantum behaviors.",
  },
  {
    id: 3,
    title: "Educational Approaches in Advanced Physics",
    description: "Researching innovative teaching methods to make quantum physics more accessible.",
  },
  {
    id: 4,
    title: "Artistic Visualization of Quantum Phenomena",
    description: "Developing new methods to visually represent complex quantum behaviors.",
  },
  {
    id: 5,
    title: "Educational Approaches in Advanced Physics",
    description: "Researching innovative teaching methods to make quantum physics more accessible.",
  },
];

const Research = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-800 mb-8"
        >
          📖 PhD Research & Publications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 mb-10 text-lg"
        >
          A collection of research work and ongoing projects.
        </motion.p>

        {/* Research Papers - Animated Cards */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              className="bg-white shadow-lg rounded-xl p-7 border border-gray-200 
                         hover:shadow-2xl transition duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)" }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{paper.title}</h3>
              <p className="text-gray-600 text-md mt-2">
                <span className="font-medium text-gray-700">Author:</span> {paper.author}
              </p>
              <p className="text-gray-600 text-md mt-1">
                <span className="font-medium text-gray-700">Year:</span> {paper.year}
              </p>
              <div className="mt-5">
                <a
                  href={paper.file}
                  download
                  className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md text-md font-medium 
                             hover:bg-blue-700 transition"
                >
                  📥 Download Paper
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Research Projects Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
            🔬 Current Research Projects
          </h2>

          <div className="grid md:grid-cols-2 pb-10 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 
                           group cursor-pointer transition duration-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#f0f9ff",
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-md mt-3">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Research;

