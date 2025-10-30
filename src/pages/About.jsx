import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          👋 I'm <span className="text-blue-600">Usama Tahir</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Full-Stack Developer specializing in designing and developing modern, scalable, high-performance web applications with exceptional user experiences — from intuitive front-end interfaces to secure and optimized back-end systems.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto mt-14 text-center">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          My mission is simple — Craft digital experiences that are fast,
          beautiful, and built for real business growth 🚀
        </p>
      </div>

      {/* Core Expertise Section */}
      <div className="max-w-6xl mx-auto mt-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 text-center mb-14"
        >
          Core Expertise
        </motion.h2>

        <div className="space-y-16">
          {[
            {
              title: "Frontend",
              icon: "💎",
              skills: ["React.js", "Next.js", "Tailwind CSS", "UI/UX Design", "Responsive Design"]
            },
            {
              title: "Backend",
              icon: "⚙️",
              skills: ["Laravel", "Express.js", "FastAPI", "JWT Auth", "RESTful APIs", "WebSockets"]
            },
            {
              title: "Databases",
              icon: "🗄️",
              skills: ["MySQL", "MongoDB", "Data Modeling", "Query Optimization"]
            },
            {
              title: "Cloud & DevOps",
              icon: "☁️",
              skills: ["AWS (EC2/S3)", "Ubuntu Server", "Nginx", "CI/CD Deployments"]
            },
            {
              title: "Programming",
              icon: "💻",
              skills: ["JavaScript (ES6+)", "PHP", "Python"]
            }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">{category.icon}</span> {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.07 }}
                    className="bg-white/40 backdrop-blur-md border shadow-md rounded-xl py-4 px-2 text-center font-medium text-gray-700 hover:shadow-xl transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Stats */}
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          ["5+", "Years Experience"],
          ["60+", "Projects Delivered"],
          ["95%", "Client Satisfaction"],
          ["100%", "Remote Available"],
        ].map(([num, label], index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-blue-600">{num}</div>
            <p className="text-gray-600">{label}</p>
          </div>
        ))}
      </div>

      {/* Detailed About Project */}
      <div className="max-w-4xl mx-auto mt-24 text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          About This Project
        </h2>
        <p className="mb-4">
          This Blog CMS Showcase demonstrates how scalable UI, interactive
          features, design consistency, and optimized performance can be achieved
          using modern frontend technologies — without backend complexity.
        </p>
        <p className="mb-4">
          The platform includes professional features like category filtering,
          search, markdown rendering, featured articles carousel, SEO metadata,
          and responsive component architecture — making it a complete
          representation of real client projects.
        </p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto text-center mt-16"
      >
        <a
          href="https://wa.me/923040752095"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition"
        >
          Let’s Build Something Great Together
        </a>
      </motion.div>
    </div>
  );
}
