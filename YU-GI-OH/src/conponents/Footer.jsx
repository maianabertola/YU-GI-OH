import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

//ajouter l'image du button en absolute dans l'input
function Footer() {
  return (
    <>
        <footer>
          <div className='text_footer'>
            <strong className='strong_footer'>Social Media</strong>
            <div className='components'>
              <Link to="https://www.facebook.com/YuGiOhCardEU">
                <div>
                  <img src='../../public/assets/facebook.png' className='photo_footer'></img>
                </div>
              </Link> 
              <Link to="https://www.instagram.com/YuGiOhCardEU">
                <div>
                <img src='../../public/assets/instagram.png' className='photo_footer'></img>
                </div>
              </Link> 
              <Link to="https://www.twitch.tv/YuGiOhCardEU">
              <div>
                <img src='../../public/assets/twitch.png' className='photo_footer'></img>
                </div>
              </Link> 
              <Link to="https://twitter.com/YuGiOhCardEU">
              <div>
                <img src='../../public/assets/twitter.png' className='photo_footer'></img>
                </div>
              </Link> 
              <Link to="https://www.youtube.com/YuGiOhCardEU">
              <div>
                <img src='../../public/assets/youtube.png' className='photo_footer'></img>
                </div>
              </Link> 
            </div>
          </div>
          <div className='text_footer second_foot'>
            <strong className='strong_footer'>Find Your Card</strong>
            <Link to="/all-cards">
              <button className='button'>Let's go</button>
            </Link>
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