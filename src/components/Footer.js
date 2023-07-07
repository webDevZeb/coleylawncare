import React from 'react'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-4 text-center">
        &copy; {year} Coley Lawn Care. All rights reserved.
      </footer>
    </>
  )
}

export default Footer
