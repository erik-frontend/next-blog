"use client"
import React, { useState } from 'react'
import Nav from './nav/Nav'
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = () => setIsOpenMenu(value => !value)

  return (
    <header className='flex px-3.5 py-6'>
      <div className="container-center justify-between">
        <span className="text-3xl font-bold">Next Blog</span>
        <Nav isOpenMenu={isOpenMenu}/>
        <div className="burger" onClick={openMenu}>
          {isOpenMenu ? <IoClose/> : <IoMenu/>}
        </div>
      </div>
    </header>
  )
}

export default Header