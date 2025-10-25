import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({blog}){
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-smooth">
      <Link to={`/blog/${blog.id}`}>
        <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
      </Link>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100">{blog.category}</span>
          <span className="text-xs text-slate-400">{blog.date}</span>
        </div>
        <h3 className="text-lg font-semibold">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="text-sm text-slate-500 mt-2">by {blog.author}</p>
      </div>
    </article>
  )
}
