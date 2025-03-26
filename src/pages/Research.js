
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

