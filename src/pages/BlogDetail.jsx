import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../components/BlogCard'
import { SEOConfig } from '../SEOConfig'

export default function BlogDetail({ blogs }) {
  const { id } = useParams()
  const blog = blogs.find(b => String(b.id) === String(id))

  if (!blog) return <div className="py-12 text-center">Blog not found.</div>

  const related = blogs
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3)

  const blogUrl = `${SEOConfig.siteUrl}/blog/${id}`

  return (
    <article className="max-w-3xl mx-auto px-4">
      {/* SEO Helmet Section */}
      <Helmet>
        <title>{`${blog.title} | ${SEOConfig.siteName}`}</title>
        <meta name="description" content={blog.content.slice(0, 160)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content.slice(0, 160)} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.content.slice(0, 160)} />
        <meta name="twitter:image" content={blog.image} />
        <link rel="canonical" href={blogUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.title,
            image: blog.image,
            author: {
              '@type': 'Person',
              name: blog.author,
            },
            datePublished: blog.date,
            description: blog.content.slice(0, 160),
            url: blogUrl,
            publisher: {
              '@type': 'Organization',
              name: SEOConfig.siteName,
            },
          })}
        </script>
      </Helmet>

      {/* Blog Layout (unchanged design) */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 sm:h-80 object-cover rounded-xl"
      />

      <div className="mt-4">
        <div className="text-sm text-slate-500">
          {blog.date} • {blog.author}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
          {blog.title}
        </h1>

        {/* Markdown content */}
        <div className="prose dark:prose-invert mt-4 max-w-none">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="mt-10">
          <h3 className="font-semibold mb-4 text-lg">Related Posts</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(r => (
              <BlogCard key={r.id} blog={r} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
