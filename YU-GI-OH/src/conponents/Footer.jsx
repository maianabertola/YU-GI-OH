import React from 'react'
import './Footer.css'

//ajouter l'image du button en absolute dans l'input
function Footer() {
  return (
    <>
        <footer>
          <div className='text_footer'>
            <strong className='strong_footer'>Soial Media</strong>
          </div>
          <div className='text_footer'>
            <strong className='strong_footer'>Find Your Card</strong>
            <input type='search'></input>
          </div>
          <div className='text_footer'>
            <strong className='strong_footer'>Legal</strong>
            <p>this is a student project please be friendly</p>
          </div>
        </footer>
    </>
  )
}

export default Footer