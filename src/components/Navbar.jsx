import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Link = ({to, children}) => (
  <NavLink to={to} className={({isActive})=>"px-3 py-2 rounded-md transition-smooth " + (isActive? 'bg-indigo-500 text-white':'text-slate-700 dark:text-slate-200') }>{children}</NavLink>
)

export default function Navbar(){
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold text-indigo-600">Blog CMS Showcase</div>
          <div className="hidden md:flex items-center gap-1">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <NavLink to="/blogs" className="px-3 py-2 rounded-md text-slate-700 dark:text-slate-200">Blogs</NavLink>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
