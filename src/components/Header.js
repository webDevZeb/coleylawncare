import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from '../assets/LawnCareLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Hamburger from './Hamburger'

import OpenNav from './OpenNav'

const Header = () => {
  let [open, setIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleWindowResize = () => {
    setIsSmallScreen(window.innerWidth < 800)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  if (isSmallScreen) {
    return (
      <>
        {open ? (
          <OpenNav open={open} setIsOpen={setIsOpen} />
        ) : (
          <Hamburger open={open} setIsOpen={setIsOpen} />
        )}
      </>
    )
  } else {
    return (
      <>
        <div className="bg-gray-700 py-3 text-gray-300 flex justify-between px-20 ">
          <div>Coley Lawn Care</div>
          <div className="flex items-center">
            <a href="tel:828-320-7422">
              <BsFillTelephoneFill />
            </a>
            <a href="tel:828-320-7422" className="px-3">
              828 320 7422
            </a>
            <div className="px-10">Servicing the greater Taylorsville area</div>
          </div>
        </div>
        <header className="flex text-md uppercase">
          <div className="w-1/2 flex items-center justify-center">
            <img src={logo} alt="logo" className="h-12" />
          </div>
          <div className="w-1/2 bg-green-500 justify-center ">
            <nav className="flex p-4  text-white space-x-10 justify-center font-bold">
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>

              <Link to="/services" className="hover:text-gray-500">
                Services
              </Link>

              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
            </nav>
          </div>
        </header>
      </>
    )
  }
}

export default Header
