import React, {useEffect, useState} from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle(){
  const [dark, setDark] = useState(()=>{
    if(typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(()=>{
    const root = document.documentElement
    if(dark) root.classList.add('dark'); else root.classList.remove('dark')
    localStorage.setItem('theme', dark? 'dark':'light')
  },[dark])

  return (
    <button onClick={()=>setDark(s=>!s)} className="p-2 rounded-md border border-slate-200 dark:border-slate-700">
      {dark? <FiSun/> : <FiMoon/>}
    </button>
  )
}
