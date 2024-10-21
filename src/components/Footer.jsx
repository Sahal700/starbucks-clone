import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='row w-100 g-0 pt-5 ps-3 ps-md-0 text-light d-none d-md-flex ' style={{backgroundColor:"#0e382c"}} >
      <div className="col-md-2 d-flex justify-content-md-center pt-5"><img src="https://www.starbucks.in/assets/icon/logo.png" alt="no image" width={"60px"} height={"60px"} className='ms-2'/></div>
      <div className="col-md-2 mt-5 mt-md-0 pt-md-5">
        <h5><a href="" className='text-decoration-none text-light'>About Us</a></h5>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Our Heritage</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>OurCoffeehouse</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Our company</a></li>
      </div>
      <div className="col-md-2 mt-4 mt-md-0 pt-md-5">
        <h5><a href="" className='text-decoration-none text-light'>Resposibility</a></h5>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Diversity</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Community</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Ethical Sourcing</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Environmental Stewardship</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Learn More</a></li>
      </div>
      <div className="col-md-2 mt-5 mt-md-0 pt-md-5">
        <h5><a href="" className='text-decoration-none text-light'>Quick Links</a></h5>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Privacy Policy</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>FAQs</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Starbucks India Mobile App Terms of Use</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Customer Service</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Season's Gifting</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Loyalty Program Terms and Conditions</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Starbucks Rewards Day Offer</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Beverage Subscription</a></li>
        <li className='mt-3'><a href="" className='text-decoration-none fw-light footer-link'>Diwali Bonus Star Offer</a></li>
      </div>
      <div className="col-md-2 mt-5 mt-md-0 pt-md-5">
        <h5><a href="" className='text-decoration-none text-light'>SOCIAL MEDIA</a></h5>
        <div className='d-flex mt-3'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x me-3'/>
        <FontAwesomeIcon icon={faFacebookF} className='fa-2x mx-3'/>
        <FontAwesomeIcon icon={faTwitter} className='fa-2x ms-3'/>
        </div>

      </div>
      <div className="col-md-2 mt-5 mt-md-0 pt-md-5">
        <img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="" /><br />
        <img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="" />
      </div>
      <div className='mt-5 px-md-5 px-3'>
        <hr className='mx-md-5 mx-0'/>
      </div>
      <div className='px-md-5 px-3 d-flex flex-column flex-md-row pb-5'>
        <a href="" className='text-decoration-none fw-light footer-link ms-md-5 ms-3 me-2'>Privacy Policy</a> |
        <a href="" className='text-decoration-none fw-light footer-link ms-3 me-2'>Privacy Statement</a> |
        <a href="" className='text-decoration-none fw-light footer-link ms-3 me-2'>Terms of Use</a> |
        <a href="" className='text-decoration-none fw-light footer-link ms-3 me-2'>Contact Us</a>
        <span className='ms-md-auto mt-3 mt-md-0 me-5' style={{fontSize:'12px'}}>© 2024 Starbucks Coffee Company. All rights reserved.</span>
      </div>
    </div>

    <div className='bg-light border-top w-100 small-footer d-flex justify-content-around d-md-none'>
      <Link to={'/'} className='text-dark text-decoration-none p-3 d-flex flex-column align-items-center'><img src="https://www.starbucks.in/assets/icon/home_inactive.svg" alt="" /><span className='mt-2'>Home</span></Link>
      <Link to={'/gift'} className='text-dark text-decoration-none p-3 d-flex flex-column align-items-center'><img src="https://www.starbucks.in/assets/icon/gift_Inactive.svg" alt="" /><span className='mt-2'>Gift</span></Link>
      <Link to={'/order'} className='text-dark text-decoration-none p-3 d-flex flex-column align-items-center footer-image'><img className='bg-success p-3 rounded-pill' src="https://www.starbucks.in/assets/icon/nav_order.svg" alt="" /><span className='mt-2'>Order</span></Link>
      <Link to={'/'} className='text-dark text-decoration-none p-3 d-flex flex-column align-items-center'><img src="https://www.starbucks.in/assets/icon/pay-filled.svg" alt="" /><span className='mt-2'>Pay</span></Link>
      <Link to={'/'} className='text-dark text-decoration-none p-3 d-flex flex-column align-items-center'><img src="https://www.starbucks.in/assets/icon/Mask.svg" alt="" /><span className='mt-2'>Search</span></Link>
    </div>
    </>
  )
}

export default Footer