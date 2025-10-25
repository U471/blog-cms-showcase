import React, {useMemo, useState} from 'react'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

export default function BlogList({blogs}){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const categories = useMemo(()=>{
    const set = new Set(blogs.map(b=>b.category))
    return Array.from(set)
  },[blogs])

  const filtered = blogs.filter(b=>{
    const matchQ = b.title.toLowerCase().includes(q.toLowerCase()) || (b.content||'').toLowerCase().includes(q.toLowerCase())
    const matchCat = cat==='All' || b.category===cat
    return matchQ && matchCat
  })

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar value={q} onChange={setQ} />
        <CategoryFilter categories={categories} active={cat} onChange={setCat} />
      </div>

      {filtered.length===0 ? (
        <div className="text-center py-12">No blogs found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(b=> <BlogCard key={b.id} blog={b} />)}
        </div>
      )}
    </div>
  )
}
