// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AcceptLoan from './pages/accept'
import RejectLoan from './pages/reject'

function App() {
  
  return (
    <main>
      <header className="bg-white sticky top-0 min-h-10 p-2 py-4">
        <img src="/logo.png" className="max-w-[180px] mx-auto" alt="" />
      </header>
      <Routes>
        <Route index path="/:loan_id" element={<AcceptLoan/>}/>
        <Route path="/accept/:loan_id" element={<AcceptLoan/>}/>
        <Route path="/reject/:loan_id" element={<RejectLoan/>}/>
        <Route path="/success" element={<RejectLoan/>}/>
      </Routes>
    </main>
  )
}

export default App
