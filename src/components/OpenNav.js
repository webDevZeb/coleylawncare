import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OpenNav = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-green-200 to-green-800 text-2xl font-bold">
        <FaWindowClose
          className="absolute top-0 left-0 m-4  cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to="/"
          className="text-black hover:text-gray-500 mb-4"
        >
          HOME
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to="/services"
          className="text-black hover:text-gray-500 mb-4"
        >
          SERVICES
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          to="/contact"
          className="text-black hover:text-gray-500 mb-4"
        >
          CONTACT
        </Link>
      </div>
    </>
  )
}

export default OpenNav
