import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({value,onChange}){
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={value} onChange={e=>onChange(e.target.value)} className="pl-10 pr-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" placeholder="Search blogs..." />
      </div>
    </div>
  )
}
