import React from 'react';
import NavLink from "@/components/nav-link/nav-link"
import Link from 'next/link';
const MainHeader = () => {
  
	return (
		<header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
	)
}

export default MainHeader
