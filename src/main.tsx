import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwindcss.css'

const App = () => {
  return (
    <div className='bg-blue-500 text-white p-4'>1</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
