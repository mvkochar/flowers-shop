import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bar d-f jc-sb align-center">
        <div>
          <div className="footer-title">Menu</div>
          <nav>
            <ul className="footer-nav-list d-f ">
              <li><Link to="search">Search</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About us</Link></li>
              <li><Link to="catalog">Catalog</Link></li>
              <li><Link to="collections">Collections</Link></li>
              <li><Link to="contacts">Contacts</Link></li>
            </ul>
          </nav>
        </div>
        <div style={{ textAlign: "center" }}>
          <div><img src="images/logo.svg" alt="logo" /></div>
          <p className="footer-info">6201 Hollywood blvd <br /> Los Angeles, California 90028</p>
          <p className="footer-info">Monday - Friday 9:00 am - 8:00 pm Saturday 10:00 am - 5:00 pm Sunday 10:00 am - 5:00 pm</p>
          <p className="footer-info">+214 772 56 74 cherryblossom@gmail.com</p>
          <div className="footer-social d-f">
            <div><img src="images/social1.png" alt="social1" /></div>
            <div><img src="images/social2.png" alt="social2" /></div>
            <div><img src="images/social3.png" alt="social3" /></div>
          </div>
        </div>
        <div>
          <div className="footer-title">Legal Notice</div>
          <nav>
            <ul className="footer-nav-list d-f ">
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Refund Policy</a></li>
              <li><a href="">Shipping police</a></li>
              <li><a href="">Billing and payment</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-payments"><img src="images/payments.png" alt="payments" /></div>
      <div className="footer-author">&copy; 2022, Los Angeles Florist - Cherry Blossom</div>
    </footer>
  )
}

export default Footer