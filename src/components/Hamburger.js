import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/LawnCareLogo.png'

const Hamburger = ({ open, setIsOpen }) => {
  return (
    <>
      <div className="flex ">
        <button
          onClick={() => setIsOpen(!open)}
          className="bg-green-600 text-white py-2 px-6  md:ml-8 hover:bg-green-300 duration-500"
        >
          <GiHamburgerMenu />
        </button>
        <img src={logo} alt="logo" className="h-12" />
      </div>
    </>
  )
}

export default Hamburger
