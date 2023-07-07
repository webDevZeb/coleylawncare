import React from 'react'
import cleanIcon from '../assets/clean-icon.png'
import hammerIcon from '../assets/hammericon.png'
import trashIcon from '../assets/trash-icon.png'
import lawnmowerIcon from '../assets/lawnmowericon.png'
import leafIcon from '../assets/leaf-icon.png'
import fertilizerIcon from '../assets/fertilizer-icon.png'
import scissorsIcon from '../assets/scissors-icon.png'
import pressureIcon from '../assets/pressureIcon.png'
import servicesMain from '../assets/services-main.jpg'

import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

//absolute top-2/ left-1/2 transform -translate-x-1/2 -translate-y-1/2
const Services = () => {
  return (
    <>
      <div className="relative">
        <img
          src={servicesMain}
          alt="green grass"
          className="w-auto h-auto opacity-50"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className=" text-gray-800 text-2xl text-center font-heaviest border-b-2 border-gray-900 leading-[1.5] md:text-4xl lg:text-5xl "
            style={{ letterSpacing: '0.2em' }}
          >
            SERVICES
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 text-sm md:text-lg text-center bg-white mb-12">
        <div className="flex flex-col items-center p-10 justify-center h-48">
          <ScrollLink
            to="clean-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={cleanIcon}
              alt="clean up man icon"
              className="w-20 h-20 "
            />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            CLEAN UP
          </span>
        </div>
        <div className="flex flex-col items-center justify-center  h-48 bg-green-100">
          <ScrollLink
            to="handyman-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img src={hammerIcon} alt="hammer icon" className="w-20 h-20" />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            HANDYMAN WORK
          </span>
        </div>
        <div className="flex flex-col items-center justify-center h-48  bg-green-100">
          <ScrollLink
            to="junk-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img src={trashIcon} alt="trash icon" className="w-20 h-20" />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            JUNK REMOVAL
          </span>
        </div>
        <div className=" flex flex-col items-center justify-center h-48">
          <ScrollLink
            to="mowing-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={lawnmowerIcon}
              alt="lawnmower icon"
              className="w-20 h-20"
            />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            MOWING
          </span>
        </div>
        <div className=" flex flex-col items-center justify-center h-48 ">
          <ScrollLink
            to="leaf-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img src={leafIcon} alt="leaf icon" className="w-20 h-20" />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            LEAF REMOVAL
          </span>
        </div>
        <div className="flex flex-col items-center justify-center h-48 bg-green-100 p-10">
          <ScrollLink
            to="fertilize-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={fertilizerIcon}
              alt="fertilizer icon"
              className="w-20 h-20"
            />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            FERTILIZE & MULCH
          </span>
        </div>

        <div className="flex flex-col items-center justify-center h-48 bg-green-100">
          <ScrollLink
            to="trimming-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img src={scissorsIcon} alt="scissors icon" className="w-20 h-20" />
          </ScrollLink>

          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            TRIMMING & REMOVAL
          </span>
        </div>

        <div className="flex flex-col items-center justify-center h-48">
          <ScrollLink
            to="pressure-section"
            smooth={true}
            duration={1000}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={pressureIcon}
              alt="pressure washer icon"
              className="w-20 h-20 "
            />
          </ScrollLink>
          <span className="mt-4 text-center font-heaviest text-md md:text-lg">
            PRESSURE WASHING
          </span>
        </div>
      </div>
      <div className="">
        <div className=" flex justify-center  " id="clean-section">
          <div className="max-w-2xl ">
            <div className="grid grid-cols-2 ">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="service-title text-center">Clean Up</h3>
                <p className="service-info ml-2 text-center">
                  Our professional clean-up service will transform your outdoor
                  space, removing debris, leaves, and other unsightly elements
                  to create a neat and organized landscape.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={cleanIcon}
                  alt="clean up icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-green-100" id="handyman-section">
          <div className="max-w-2xl mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center ">
                <h3 className="service-title mt-10 text-center">
                  Handyman Work
                </h3>
                <p className="service-info ml-2 text-center ">
                  Need help with small repairs or maintenance tasks? Our skilled
                  handyman team is here to assist you, whether it's fixing
                  fences, installing outdoor fixtures, or handling other
                  handyman projects.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={hammerIcon}
                  alt="hammer icon"
                  className="w-20 h-20 mb-4"
                />

                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center" id="junk-section">
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">Junk Removal</h3>
                <p className="service-info ml-2 text-center">
                  Say goodbye to unwanted junk and clutter in your yard. Our
                  junk removal service efficiently and responsibly clears away
                  debris, old furniture, and other items, leaving you with a
                  clean and clutter-free outdoor area.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={trashIcon}
                  alt="trash icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  bg-green-100" id="mowing-section">
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">Mowing</h3>
                <p className="service-info ml-2 text-center">
                  Our professional mowing service is designed to keep your lawn
                  looking neat and well-maintained. We have a team of
                  experienced lawn care specialists who will ensure your grass
                  is cut to the ideal height, providing a clean and manicured
                  appearance.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={lawnmowerIcon}
                  alt="lawn mower icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center" id="leaf-section">
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">Leaf Removal</h3>
                <p className="service-info ml-2 text-center">
                  As seasons change, leaves can accumulate and make your yard
                  look messy. Our leaf removal service ensures a pristine
                  landscape by efficiently raking and removing leaves, leaving
                  your property looking immaculate.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={leafIcon}
                  alt="leaf icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center bg-green-100"
          id="fertilize-section"
        >
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">
                  Fertilize & Mulch
                </h3>
                <p className="service-info ml-2 text-center">
                  Boost the health and vitality of your plants and garden beds
                  with our fertilizing and mulching service. We use high-quality
                  products to nourish your soil, promote plant growth, and
                  enhance the appearance of your landscape.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={fertilizerIcon}
                  alt="fertilizer icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center" id="pressure-section">
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">
                  Pressure Washing
                </h3>
                <p className="service-info ml-2 text-center ">
                  Restore the beauty of your outdoor surfaces with our pressure
                  washing service. We effectively remove dirt, grime, mold, and
                  other stains from driveways, sidewalks, decks, and other
                  outdoor surfaces, leaving them clean and revitalized
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={pressureIcon}
                  alt="pressure washer icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-green-100" id="trimming-section">
          <div className="max-w-2xl mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center">
                <h3 className="service-title mt-5 text-center">
                  Trimming & Removal
                </h3>
                <p className="service-info ml-2 text-center">
                  Our skilled team of professionals will expertly trim and shape
                  your shrubs, hedges, and trees, giving them a well-groomed and
                  visually appealing appearance. We also offer tree removal
                  services when necessary.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={scissorsIcon}
                  alt="scissors icon"
                  className="w-20 h-20 mb-4"
                />
                <Link
                  to="/contact"
                  style={{ cursor: 'pointer' }}
                  className="border bg-green-500 text-white py-2 px-6 rounded-full
              font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
