import React from 'react'
import { Helmet } from 'react-helmet-async'
import FeaturedCarousel from '../components/FeaturedCarousel'
import BlogCard from '../components/BlogCard'
import { SEOConfig } from '../SEOConfig'

export default function Home({ blogs }) {
  const featured = blogs.filter(b => b.featured)
  const latest = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>{`Home | ${SEOConfig.siteName}`}</title>
        <meta
          name="description"
          content="Explore the latest and featured blog posts on technology, design, and development. Built with React, Tailwind CSS, and SEO optimization."
        />
        <meta property="og:title" content={`Home | ${SEOConfig.siteName}`} />
        <meta
          property="og:description"
          content="Explore the latest and featured blog posts on technology, design, and development."
        />
        <meta property="og:url" content={SEOConfig.siteUrl} />
        <meta property="og:image" content={`${SEOConfig.siteUrl}/cover.jpg`} />
        <link rel="canonical" href={SEOConfig.siteUrl} />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Welcome to <span className="text-indigo-600">Blog CMS Showcase</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Discover engaging articles about web development, UI/UX, and tech trends.
          A modern, frontend-focused blog built with React and Tailwind.
        </p>
      </section>

      {/* ✅ Featured Section */}
      {featured.length > 0 && (
        <section className="mb-12">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              🌟 Featured Posts
            </h2>
            <FeaturedCarousel items={featured} />
          </div>
        </section>
      )}

      {/* ✅ Latest Posts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">
          📰 Latest Posts
        </h2>

        {latest.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map(b => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-center">No posts available yet.</p>
        )}
      </section>
    </div>
  )
}
