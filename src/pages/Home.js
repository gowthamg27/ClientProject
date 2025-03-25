import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaChalkboardTeacher, FaAtom, FaUserGraduate, FaHistory } from 'react-icons/fa';


// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const timelineData = [
  { year: "2018", title: "Started Internship", description: "Worked on web development projects and learned industry skills." },
  { year: "2019", title: "Joined XYZ Company", description: "Started as a Junior Developer, worked on frontend technologies." },
  { year: "2020", title: "Promoted to Full-Stack Developer", description: "Handled full-stack development using MERN stack." },
  { year: "2021", title: "Worked on AI Projects", description: "Developed AI-based solutions for real-world problems." },
  { year: "2022", title: "Freelance & Open Source", description: "Contributed to open-source projects and freelanced globally." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: -20, transition: { duration: 0.5 } },
};

const journeyData = [
  { title: "Started Internship", desc: "Began as a software intern at XYZ." },
  { title: "First Job", desc: "Joined ABC Tech as a junior developer." },
  { title: "Promotion", desc: "Promoted to Senior Developer role." },
  { title: "New Opportunity", desc: "Started as a Tech Lead at DEF Corp." },
];





const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.3 } },
};


const Home = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">
      {/* Hero Section (Reduced Size) */}
      <motion.div
        className="hero-section h-[30vh] flex flex-col justify-center items-center text-center bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h1 className="text-3xl font-bold text-white">Dr. James Richardson, PhD</h1>
        <p className="text-lg text-gray-50">Senior Researcher & Professor of Quantum Physics</p>
      </motion.div>

      {/* Profile Section */}
      <motion.section
      
      className="profile-section flex flex-col md:flex-row items-center gap-3 p-4 mb-0 pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
      >
        <motion.div className="profile-image w-100 h-100 rounded-10px overflow-hidden shadow-lg" variants={zoomIn}>
          <img
            src="/assets/images/men.PNG"
            alt="Dr. James Richardson"
            className="w-full h-full object-cover"
          />
        </motion.div>
       

        {/* {About section} */}
        


        <motion.div className="profile-details text-center md:text-left relative z-10" variants={fadeInRight}>
          <h2 className="text-3xl font-bold text-blue-700">Meet Dr. James Richardson</h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            A visionary in Quantum Computing, Dr. Richardson has pioneered groundbreaking research in 
            quantum mechanics, revolutionizing computational models. With over <span className="text-blue-600 font-semibold">20 years</span> of 
            academic excellence, he has collaborated with <span className="text-blue-600 font-semibold">NASA</span> and top global institutes, 
            pushing the boundaries of innovation.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center"><FaAtom className="text-blue-600 mr-2" /> Led the Quantum Entanglement Project</li>
            <li className="flex items-center"><FaChalkboardTeacher className="text-blue-600 mr-2" /> Mentored over 50+ PhD Scholars</li>
            <li className="flex items-center"><FaUserGraduate className="text-blue-600 mr-2" /> Awarded National Science Medal 2022</li>
          </ul>
        </motion.div>
        </motion.section>



{/* History Section */}
<motion.section
  className="history-section bg-gray-100 pr-10 pl-10 pb-10 rounded-xl mt-0"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
  viewport={{ once: false }}
>
  {/* Section Header */}
  <div className="text-center mb-4">
    <h2 className="text-4xl font-bold text-blue-700 tracking-wide">Our History</h2>
    <p className="text-gray-600 mt-2 text-lg">
      A journey of excellence, innovation, and global impact.
    </p>
  </div>

  {/* History Content */}
  <div className="space-y-4">
    {[
      {
        title: "🎓 Academic Foundations",
        desc: "Dr. Richardson pursued advanced studies in quantum mechanics, laying the foundation for future innovations in theoretical physics.",
      },
      {
        title: "🔬 Quantum Computing Breakthroughs",
        desc: "Pioneered research that led to advancements in quantum cryptography and high-speed computing.",
      },
      {
        title: "🚀 Space & AI Integration",
        desc: "Developed AI-driven quantum models for satellite technology in collaboration with NASA.",
      },
      {
        title: "🏆 Global Recognition",
        desc: "Awarded for his groundbreaking contributions in AI and quantum physics, shaping the future of technology.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.1 } }}
        viewport={{ once: false }}
      >
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="mt-2 text-gray-600">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>






     {/* Achievements Section */}
<motion.section
  className="achievements-section px-10 pl-10 pr-10bg-white-100 text-black rounded-xl "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={staggerContainer}
>
  {/* Section Header */}
  <div className="text-center">
    <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-lg">
      Notable Achievements
    </h2>
    <p className="text-lg text-gray mt-1">
      Recognizing milestones of innovation and excellence.
    </p>
  </div>

{/* Achievements Grid */}
<div className="grid grid-cols-1 pb-5 bg-white=100 mt-10 md:grid-cols-2 gap-4">
  {[
    {
      icon: "🏆",
      title: "National Science Award",
      desc: "Received the prestigious award for contributions to AI and Physics.",
    },
    {
      icon: "📚",
      title: "Published Research",
      desc: "Author of over 75 research papers in top international journals.",
    },
    {
      icon: "🔬",
      title: "Research Grants",
      desc: "Secured over $4.5 million in funding for AI and Quantum research.",
    },
    {
      icon: "👨‍🏫",
      title: "Mentorship",
      desc: "Guided and mentored 28 PhD students in AI and computational science.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="relative p-4 bg-white/10 border border-white/30 backdrop-blur-lg rounded-lg shadow-md transition-transform transform hover:scale-103 "
      initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: false }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.1 },
        boxShadow: "0px 5px 15px rgba(72, 72, 72, 0.4)", // Light glow effect
      }}
    >
      <div className="text-3xl mb-3">{item.icon}</div>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-gray-800 text-sm mt-1">{item.desc}</p>
    </motion.div>
  ))}
</div>

</motion.section>



{/* {prosonal journy} */}
<div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-blue-700 mb-10">Professional Journey</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 w-full max-w-6xl">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className={`p-6 rounded-lg shadow-lg bg-white text-black transition-all duration-300 
              hover:bg-black hover:text-white cursor-pointer 
              ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} w-full md:w-[90%]`}
          >
            <h3 className="text-xl font-semibold">{item.year} - {item.title}</h3>
            <p className="mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>




   
    </div>
  );
};

export default Home;

// Teaching Philosophy
// <motion.section
//   className="philosophy-section bg-gray-100 p-6 rounded-lg shadow-md"
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   variants={zoomIn}
// >
//   <h2 className="text-2xl font-bold">Teaching Philosophy</h2>
//   <p className="mt-2">
//     "My approach to education combines rigorous scientific methodology with creative exploration..."
//   </p>
// </motion.section>
