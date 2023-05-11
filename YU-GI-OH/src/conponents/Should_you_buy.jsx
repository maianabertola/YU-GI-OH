import React from 'react'
import './Should_you_buy.css'

function Should_you_buy() {
  return (
    <div className='Should_you_buy'>
        <h1>Should you buy it?</h1>
        <div className='rare'>
            <h2>ultra rare</h2>
            <p>rarity</p>
        </div>
        <div className='prices'>
            <div>
                <h2>number</h2>
                <p>ebay prices</p>
            </div>
            <div>
                <h2>number</h2>
                <p>amazon prices</p>
            </div>
        </div>
        <button>Yes, just do it</button>
    </div>
  )
}

export default Should_you_buy