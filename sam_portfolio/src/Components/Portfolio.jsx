import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin } from 'lucide-react'
import Carousel from '../Components/Carousel'
export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 p-4 sm:p-8 flex flex-col">
      <header className="flex justify-between items-center mb-16 relative">
        <button 
          className="sm:hidden z-20 w-10 h-10 relative focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-gray-600 transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
        <div className="md:ml-16 text-6xl font-thin text-blue-400 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:static sm:translate-x-0 sm:translate-y-0">SAM</div>
        <nav className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 sm:opacity-100'
        } sm:translate-x-0 fixed sm:relative top-0 left-0 h-full w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out z-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center`}>
          <ul className="flex flex-col sm:flex-row font-semibold space-y-4 sm:space-y-0 sm:space-x-6 text-lg sm:text-xl">
            <li><Link to="#" className="text-black font-semibold hover:text-gray-600 transition-colors">Home</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-black transition-colors">Projects</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-black transition-colors">Resume</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-black transition-colors">About Me</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="max-w-7xl flex-grow max-h-16xl overflow-hidden mt-12 md:mt-48 md:ml-16" >
        <h1 className="md:text-7xl text-5xl text-pretty  font-semibold   mb-6" >
          Hi, I am Samiksha Parhate<span className="text-3xl sm:text-8xl">👋</span>
        </h1>
        <div className='max-w-3xl '>
            <p className="text-lg font-medium sm:text-3xl  text-gray-700  mb-8 mt-12 ml-1 leading-relaxed">
            UI/UX Designer & Ambitious Content Creator. Currently, I'm based in
            Hyderabad, designing responsive websites and leading the creative
            processes.
            </p>

        </div>
      </main>
      
        
      <footer className="flex justify-end mt-8">
        <div className="flex space-x-4">
          <Link to="#" className="text-gray-600 hover:text-black transition-colors">
            <Facebook size={24} />
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black transition-colors">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="feather feather-behance"><path d="M1.5 1.5h21v21h-21z"></path><path d="M6.5 6.5h5M13.5 6.5h4M6.5 10.5h5M13.5 10.5h4M6.5 14.5h5M15.5 14.5h2"></path></svg>
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black transition-colors">
            <Linkedin size={24} />
          </Link>
        </div>
      </footer>
    </div>
  )
}
