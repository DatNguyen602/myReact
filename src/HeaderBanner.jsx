import React from 'react'
import './style.css'

const HeaderBanner = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  })
  return (
    <div>
        <div  id='header' class='fixed'>
          <div><a href='#' class='White asha'>ARSHA</a></div>
          <div>
              <ul>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Services</a></li>
                  <li><a href='#'>Portfolio</a></li>
                  <li><a href='#'>Team</a></li>
                  <li><a href='#'>Drop Down</a></li>
                  <li><a href='#'>Contact</a></li>
              </ul>
              <ul>
                  <li class='get'><a href='#'>Get Started</a></li>
              </ul>
          </div>
        </div>

        <div class='b-top'>
          <div class="b-top-left">
            <h1>Better Solutions For Your Business</h1>
            <h3>We are team of talented designers making websites with Bootstrap</h3>
            <div class='btn'>
              <button class='btnHover'>Get Started</button>
              <button>
                <span class='White'>Watch Video</span>
              </button>
            </div>
          </div>
          <div class='b_img'>
            <img src='./hero-img.png'></img>
          </div>
        </div>

        
    </div>
  )
}

export default HeaderBanner