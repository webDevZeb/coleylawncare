import React from 'react'
import landscape from '../assets/lawnmower.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" h-full bg-green-500 text-white">
        <img
          src={landscape}
          alt="landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p
            className="text-sm md:text-xl mb-5 font-bold ;"
            style={{ letterSpacing: '0.2em' }}
          >
            QUALITY THAT IS GUARANTEED
          </p>
          <p className="text-center mb-8 text-xl md:text-3xl font-bold">
            Providing exceptional landscaping services tailored to your needs.
          </p>
          <div className="flex justify-center">
            <Link
              to="/services"
              className="bg-white text-green-500 py-2 px-6 rounded-full font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-gray-200 "
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600 "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
