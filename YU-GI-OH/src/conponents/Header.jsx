import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <img src="../../public/assets/Logo.png" className='logo_menu'></img>
        <div className="menu_header">
          <nav className='menu_button'>CARDS</nav>
          <nav className='menu_button'>CREATE YOUR CARDS</nav>
          <nav className='menu_button'>ABOUT YU-GI-OH</nav>
        </div>
      </header>
    </>
  )
}

export default Header