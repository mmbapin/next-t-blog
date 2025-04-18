'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={pathname.startsWith(href) ? 'active' : ''}>{children}</Link>
  )
}

export default NavLink