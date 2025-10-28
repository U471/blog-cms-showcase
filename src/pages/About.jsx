import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
        About the Project
      </h1>

      <div className="mt-6 bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          <strong>Blog CMS Showcase</strong> is a modern, frontend-driven blog
          management interface built with <strong>React.js</strong> and{" "}
          <strong>Tailwind CSS</strong>. It demonstrates how a scalable and
          visually appealing blog platform can be developed using clean
          component architecture — without any backend dependencies.
        </p>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          The project includes features such as category filtering, search,
          featured post carousel, markdown content rendering, and SEO-optimized
          metadata. It’s designed to replicate a real-world CMS experience for
          clients and agencies who want to see UI flow, design quality, and
          responsive layouts in action.
        </p>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Created by <strong>Usama Tahir</strong> — a frontend developer
          passionate about crafting modern, high-performance user interfaces and
          scalable web solutions. This project serves as both a portfolio piece
          and a demonstration of professional UI/UX development standards.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/U471/blog-cms-showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition"
        >
          View Source on GitHub
        </a>
        <a
          href="https://blogcms-theta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition"
        >
          Live Demo
        </a>
      </div>
    </section>
  );
}
