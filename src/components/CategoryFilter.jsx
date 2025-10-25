import React from 'react'

export default function CategoryFilter({categories,active,onChange}){
  return (
    <div className="flex gap-2 flex-wrap">
      <button onClick={()=>onChange('All')} className={`px-3 py-1 rounded-full ${active==='All'? 'bg-indigo-500 text-white':'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>All</button>
      {categories.map(c=> (
        <button key={c} onClick={()=>onChange(c)} className={`px-3 py-1 rounded-full ${active===c? 'bg-indigo-500 text-white':'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>{c}</button>
      ))}
    </div>
  )
}
