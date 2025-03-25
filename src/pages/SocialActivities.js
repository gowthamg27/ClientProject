
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const activities = [
  {
    id: 1,
    title: "NSS Camp",
    desc: "Students participated in a 7-day rural development camp, engaging in community service and awareness programs.",
    img: "/assets/images/img1.jpeg",
    date: "March 15-21, 2024",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    desc: "A campus-wide initiative where students planted over 200 trees to promote environmental sustainability.",
    img: "/assets/images/img2.jpeg",
    date: "April 5, 2024",
  },
  {
    id: 3,
    title: "Blood Donation Camp",
    desc: "Organized in collaboration with the Red Cross, students and faculty donated blood to support local hospitals.",
    img: "/assets/images/img3.jpeg",
    date: "May 10, 2024",
  },
  {
    id: 4,
    title: "Health Awareness Program",
    desc: "An informative session conducted by health experts to spread awareness about healthy lifestyles and mental well-being.",
    img: "/assets/images/img4.jpeg",
    date: "June 12, 2024",
  },
  {
    id: 5,
    title: "Community Clean-Up Drive",
    desc: "Students joined hands to clean public spaces, promoting cleanliness and hygiene in the neighborhood.",
    img: "/assets/images/img5.jpeg",
    date: "July 8, 2024",
  },
  {
    id: 6,
    title: "Educational Support Initiative",
    desc: "Students volunteered to teach underprivileged children, helping them with their studies and skill development.",
    img: "/assets/images/img6.jpeg",
    date: "August 20, 2024",
  },
];


 
const testimonials = [
    {
      id: 1,
      name: "Akhil Sharma",
      feedback: "Participating in the NSS Camp was a life-changing experience. It helped me understand social responsibility.",
      img: "/assets/images/img3.jpeg",
    },
    {
      id: 2,
      name: "Priya Patel",
      feedback: "The Tree Plantation Drive made me realize the importance of environmental sustainability. Proud to be a part of this initiative!",
      img: "/assets/images/img1.jpeg",
    },
    {
      id: 3,
      name: "Rahul Verma",
      feedback: "Blood donation is a noble cause, and I'm glad I could contribute. Looking forward to more such events.",
      img: "/assets/images/img4.jpeg",
    },
  ];
  

const SocialActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100 ">
       <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl font-bold text-center text-gray-800 mb-5"
                >
      Social Activities</motion.h1>
      <motion.p
              className="text-center text-gray-600 mb-10 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
      
        Our students actively participate in various social and community-based activities to bring positive change.
      
</motion.p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {activities.map((activity, index) => {
          const animationVariants = {
            0: { opacity: 0, x: -100 }, // Left to Right
            1: { opacity: 0, scale: 0.8 }, // Small to Big
            2: { opacity: 0, x: 100 }, // Right to Left
          };

          return (
            <motion.div
              key={activity.id}
              className="shadow-lg rounded-lg overflow-hidden bg-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={animationVariants[index % 3]} // Apply animation pattern cyclically
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: false}}
              onClick={() => setSelectedActivity(activity)}
            >
              <img src={activity.img} alt={activity.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{activity.title}</h2>
                <p className="text-gray-600 mt-2">{activity.desc}</p>
                <p className="text-blue-600 font-semibold mt-2">{activity.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Dialog open={!!selectedActivity} onClose={() => setSelectedActivity(null)} className="fixed inset-0 flex items-center justify-center p-6 bg-black/50">
  {selectedActivity && (
    <motion.div
      className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative" // Add relative positioning
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      {/* Fix Close Button Visibility */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 bg-white rounded-full p-2 shadow-md z-10"
        onClick={() => setSelectedActivity(null)}
      >
        ✖
      </button>

      <img src={selectedActivity.img} alt={selectedActivity.title} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{selectedActivity.title}</h2>
      <p className="text-gray-600 mt-2">{selectedActivity.desc}</p>
      <p className="text-blue-600 font-semibold mt-2">{selectedActivity.date}</p>
    </motion.div>
  )}
</Dialog>

       {/* Student Testimonials Section */}
       <div className="mt-12 ">
        <h2 className="text-2xl font-bold text-center">Student Testimonials</h2>
        <p className="text-center text-gray-600 mb-6">Hear from our students about their experiences in social activities.</p>

        <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-100 p-6 rounded-lg shadow-md w-80 text-center cursor-pointer bg-white"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Hover Effect
                initial={{ opacity: 0, y: 50 }} // Start from below
                whileInView={{ opacity: 1, y: 0 }} // Move to normal position
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full mb-4 " />
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
              </motion.div>
            ))}
          </div>
      </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold">Want to Join Us?</h3>
              <p className="text-gray-600 mb-4">Be a part of our social activities and make a difference in the community.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Get Involved
              </button>
            </div>
          </div>
  );
};

export default SocialActivities;
