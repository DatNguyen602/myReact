import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div>
        <div class='footer'>
            <div class='f-content'>
                <h1 class='asha color37517e'>ARSHA</h1>
                <p>A108 Adam Street New York,<br/> NY 535022 United States</p>
                <p><b>Phone:</b>+1 5589 55488 55<br/><b>Email:</b>info@example.com</p>
            </div>
            <div class='f-content'>
                <h1 class='fs-16 color37517e'>Useful Links</h1>
                <ul class='f-ul'>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Home</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>About us</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Sevires</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Terms of sevire</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Privacy policy</a></li>
                </ul>
            </div>
            <div class='f-content'>
                <h1 class='fs-16 color37517e'>Useful Links</h1>
                <ul class='f-ul'>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Web Design</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Web Development</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Product Management</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Maketing</a></li>
                    <li><a href='#'><i class="fa-solid fa-angle-right before"></i>Drapjic Design</a></li>
                </ul>
            </div>
            <div class='f-content'>
                <h1 class='fs-16 color37517e'>Our Social Networks</h1>
                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div class = 'f-icon'>
                    <i class="fa-brands fa-twitter btnHover"></i>
                    <i class="fa-brands fa-facebook-f btnHover"></i>
                    <i class="fa-brands fa-instagram btnHover"></i>
                    <i class="fa-brands fa-skype btnHover"></i>
                    <i class="fa-brands fa-linkedin-in btnHover"></i>
                </div>
            </div>
        </div>
        <div class='s-footer'>
            <p>© Copyright <b>Arsha</b>. All Rights Reserved</p>
            <p>Designed by <a href='#'>BootstrapMade</a></p>
        </div>
    </div>
  )
}

export default Footer