import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <img src="./assets/Logo.png" className='logo_menu'></img>
        <div className="menu_header">
          <nav className='menu_button'>CARDS</nav>
          <nav className='menu_button'>CREATE YOUR CARDS</nav>
          <nav className='menu_button'>ABOUT YU-GI-OH</nav>
        </div>
      </header>
        <div className='header_body'>
          <div className='header_discover'>
            <h1>welcome duelist</h1>
            <p>its time to Du-du-duel!</p>
            <button>Discover</button>
          </div>
        </div>
    </>
  )
}

export default Header