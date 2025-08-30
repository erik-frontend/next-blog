import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='flex px-3.5 py-6'>
      <span className="">Logo Next Blog</span>
      <Nav/>
    </header>
  )
}

export default Header