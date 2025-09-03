import React from 'react'
import Nav from './nav/Nav'

const Header = () => {
  return (
    <header className='flex px-3.5 py-6'>
      <span className="text-3xl font-bold">Next Blog</span>
      <Nav/>
    </header>
  )
}

export default Header