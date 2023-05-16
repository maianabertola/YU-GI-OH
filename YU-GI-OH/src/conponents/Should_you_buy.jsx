import React from 'react'
import './Should_you_buy.css'
import { Link } from 'react-router-dom'

function Should_you_buy() {
  return (
    <div className='Should_you_buy'>
        <div className='rare'>
            <h2 className='color'>75 K</h2>
            <p className='color text'>active players in 2023</p>
        </div>
        <div className='prices'>
            <div>
                <h2 className='color'>12 K</h2>
                <p className='color text'>Official cards to collect</p>
            </div>
            <div>
                <h2 className='color'>35 B</h2>
                <p className='color text'>cards sold over the world</p>
            </div>
        </div>
        <Link to="https://www.yugioh-card.com/eu/fr/play/20980-2/">
        <button>Yes, just do it</button>
        </Link>
    </div>
  )
}

export default Should_you_buy