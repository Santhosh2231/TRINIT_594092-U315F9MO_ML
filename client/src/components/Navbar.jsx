import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [isOpen,setIsOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.toggle-button')
    toggleButton.addEventListener('click', () => {
      setNavOpen(!navOpen)
    })
  }, [navOpen])

  function toggleDropdown(event){
    setIsOpen(!event.target.value);

  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-700 p-4">
      
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight text-white space-x-10 md:pl-24 "><h6 className='text-white text-2xl'>AgroTech</h6></span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white toggle-button">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${navOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm sm:flex lg:flex-grow justify-end md:pr-48 md:space-x-5">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
            <h6 className='text-teal-200 font-Merriweather md:text-lg'>Home</h6>
          </Link>
          <Link to="/#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <h6 className='text-teal-200 font-Merriweather md:text-lg'>About</h6>
          </Link>
          <Link to="/prediction" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <h6 className='text-teal-200 font-Merriweather md:text-lg'>Crop Prediction</h6>
          </Link>
          <Link to="/priceforecast" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <h6 className='text-teal-200 font-Merriweather md:text-lg'>Crop Analytics</h6>
          </Link>
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <h6 className='text-teal-200 font-Merriweather md:text-lg'>Contact us</h6>
          </Link>

        </div>
      </div>
    </nav>
    
  )
}
export default Navbar