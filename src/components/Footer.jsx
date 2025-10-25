import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Usama Tahir — Blog CMS Showcase
      </div>
    </footer>
  )
}
