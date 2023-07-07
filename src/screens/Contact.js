import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <div className="antialiased bg-gray-200">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-green-900 w-full max-w-4xl p-8 sm:p-12 md:rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking wide">Contact Us</h1>
                <p className="pt-2 text-green-100 text-md">
                  Please feel free to email or call today for quotes,
                  scheduling, or any other questions you may have.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="inline-flex space-x-2 items-center">
                    <a href="tel:828-320-7422">
                      <BsFillTelephoneFill className="text-green-300" />
                    </a>
                    <a href="tel:828-320-7422">828-320-7422</a>
                  </div>
                </div>

                <div>
                  <div className="inline-flex space-x-2 items-center">
                    <a href="mailto:gambillz@gmail.com">
                      <IoMdMail className="text-green-300" />
                    </a>
                    <a href="mailto:jonathancoley180@gmail.com">
                      jonathancoley180@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 text-lg">
                <a href="https://www.facebook.com/profile.php?id=100089705589155">
                  <BsFacebook className="text-blue-600 text-2xl bg-white rounded-2xl " />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-green-300 rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-green-300 rounded-full -left-28 -bottom-16"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                <form
                  action="https://formsubmit.co/gambillzc@gmail.com"
                  method="POST"
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label htmlFor="" className="text-md">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="" className="text-md">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="" className="text-md">
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      required
                      placeholder="Message"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2  focus:ring-2 focus:ring-green-300 mt-2"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-block self-end bg-green-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
