import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
      <div className='hero'>
          <div className="hero-left">
              <h2>NEW ARRIVALS ONLY</h2>
              <div>
                  <div className="hero-hand-icon">
                      <p>new</p>
                      <img src={require('../Assets/hand_icon.png')} alt='' />
                  </div>
                  <p>collections</p>
                  <p>for everyone</p>
              </div>
              <div className="hero-latest-btn">
                  <div>Latest Collection</div>
                   <img src={require('../Assets/arrow.png')} alt='' />
              </div>
          </div>
          <div className="hero-right">
               <img src={require('../Assets/hero_image.png')} alt='' />
          </div>

    </div>
  )
}
