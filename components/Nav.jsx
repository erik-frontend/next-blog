import { navLinks } from '@/utils/navLink'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
      {navLinks && (
        navLinks.map((link, index) => (
          <Link href={link.path} key={index}>{link.label}</Link>
        ))
      )}
    </nav>
  )
}

export default Nav