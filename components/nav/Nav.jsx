"use client"
import { navLinks } from '@/utils/navLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./nav.module.css"

const Nav = ({isOpenMenu}) => {

  const pathName = usePathname()

  // console.log(pathName);
  

  return (
    <nav className={`flex flex-1 justify-center gap-6 ${styles.nav} ${isOpenMenu ? styles.active : ""}`}>
      {navLinks && (
        navLinks.map((link, index) => (
          <Link href={link.path} key={index} className={`nav-link text-[20px] capitalize px-5 py-2 rounded-[20px] animation ${pathName === link.path ? styles.active : ""}`}>{link.label}</Link>
        ))
      )}
    </nav>
  )
}

export default Nav