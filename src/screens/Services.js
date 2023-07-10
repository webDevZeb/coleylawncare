import React from 'react'
import servicesMain from '../assets/services-main.jpg'
import serviceData from '../data/serviceData'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <div className="relative mb-11">
        <img
          src={servicesMain}
          alt="green grass"
          className="w-auto h-auto opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className=" text-gray-800 text-2xl text-center font-heaviest   leading-[1.5] md:text-4xl lg:text-4xl "
            style={{ letterSpacing: '0.2em' }}
          >
            SERVICES
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  text-sm md:text-lg text-center bg-white mb-12">
          {serviceData.map((item) => {
            const { service, image, id } = item

            return (
              <ScrollLink
                to={id}
                smooth={true}
                duration={1000}
                style={{ cursor: 'pointer' }}
                key={id}
              >
                <div
                  key={id}
                  className="flex text-sm md:text-lg text-center bg-white "
                >
                  <div className="flex flex-col items-center  justify-center h-48 w-full border rounded-lg  bg-gray-100 p-2 hover:bg-gray-200 ">
                    <img src={image} alt={service} className="w-20 h-20" />

                    <span className="mt-4 text-center font-heaviest text-md md:text-lg">
                      {service}
                    </span>
                  </div>
                </div>
              </ScrollLink>
            )
          })}
        </div>
      </div>

      {serviceData.map((item, index) => {
        const { service, description, image, id } = item
        const isEven = index % 2 === 0
        const gridItemClassName = `flex justify-center items-center ${
          isEven ? 'bg-green-100' : ''
        }`

        return (
          <div key={id} className={gridItemClassName} id={id}>
            <div className="max-w-2xl">
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-center h-full ml-2 my-8">
                  <h3 className="service-title text-center ">{service}</h3>
                  <p className="service-info text-center">{description}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={image} alt={service} className="w-20 h-20 mb-4" />
                  <Link
                    to="/contact"
                    style={{ cursor: 'pointer' }}
                    className="border bg-green-500 text-white py-2 px-6 rounded-full font-bold shadow-lg hover:shadow-xl transition duration-300 mx-5 hover:bg-green-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Services
