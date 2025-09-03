import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='px-5 py-2 text-center text-2xl'>
      <p>
        {year} Next Blog all Right Recive
      </p>
    </footer>
  )
}

export default Footer