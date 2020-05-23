import React, { Component } from 'react';
import TikTok from '../../../assets/TikTok.inline.svg';
import { Link } from 'gatsby';
import * as ROUTES from '../../constants/routes';
import Newsletter from '../Newsletter'


export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <section className="footer-top">
          <div className="footer-social">
            <div className="footer-social-content">
              <i className="fab fa-facebook-square"></i>
              <h1>Like us on Facebook</h1>
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-social">
            <div className="footer-social-content">
              <i className="fab fa-twitter"></i>
              <h1>Follow us on Twitter</h1>
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-social">
            <div className="footer-social-content">
              <i className="fab fa-instagram"></i>
              <h1>Follow Us on Insta</h1>
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-social">
            <div className="footer-social-content">
              <i className="fab fa-pinterest"></i>
              <h1>Pin us on Pinterest</h1>
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-social">
            <div className="footer-social-content">
              <TikTok className="tiktok" />
              <h1>Follow Us on TikTok</h1>
            </div>
          </div>
        </section>
        <section className="footer-nav">
          <div className="footer-nav-container">
            <div className="footer-nav-container-content">
              <h3>Hello</h3>
              <ul>
                <li>
                  <Link to={ROUTES.PHONES}>PHONES</Link>
                </li>
                <li>
                  <Link to={ROUTES.LAPTOPS}>LAPTOPS</Link>
                </li>
                <li>
                  <Link to={ROUTES.ACCESSORIES}>ACCESSORIES</Link>
                </li>
                <li>
                  <p>PROFILE</p>
                </li>
                <li>
                  <p>BAG</p>
                </li>
              </ul>
            </div>
            <div className="footer-nav-container-content">
              <h3>Services</h3>
              <ul>
                <li>
                  Contact Us
                </li>
                <li>
                  Orders & Payment Info
                </li>
              </ul>
            </div>
            <div className="footer-nav-container-content">
              <h3>Information</h3>
              <ul>
              <li>
                  About Marc.
                </li>
                <li>
                  Work With Us
                </li>
                <li>
                  Privacy Policy
                </li>
                <li>
                  T&C's
                </li>
              </ul>
            </div>
            <div className="footer-nav-container-content">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  +123 212 3123
                </li>
                <li>
                  info@notre-studio.co.uk
                </li>
                <li>
                  the cloud
                </li>
              </ul>
            </div>
            <Newsletter/>
          </div>
        </section>
      </div>
    );
  }
}
