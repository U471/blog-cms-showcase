import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl space-y-4">
        <input className="w-full p-3 rounded border border-slate-200 dark:border-slate-700" placeholder="Your name" />
        <input className="w-full p-3 rounded border border-slate-200 dark:border-slate-700" placeholder="Your email" />
        <textarea className="w-full p-3 rounded border border-slate-200 dark:border-slate-700" rows="6" placeholder="Message" />
        <button type="button" disabled className="px-4 py-2 rounded bg-indigo-500 text-white opacity-80">Send (UI only)</button>
      </form>
    </div>
  )
}
