import React from 'react'
import "./Footer.css";
import mainLogo from "../../assets/amazon_PNG25.png";


const Footer = () => {

      const year = new Date().getFullYear();
      console.log(year);

      return (
            <footer>
                  <div className="footer_container">
                        <div className="footr_details_one">
                              <h3>Get to Know US</h3>
                              <p className='bld'>About us</p>
                              <p className='bld'>Careers</p>
                              <p className='bld'>Press Releases</p>
                              <p className='bld'>Amazon Cares</p>
                        </div>
                        <div className="footr_details_one">
                              <h3>Connect with Us</h3>
                              <p className='bld'>Facebook</p>
                              <p className='bld'>Twitter</p>
                              <p className='bld'>Instagram</p>
                        </div>
                        <div className="footr_details_one forres">
                              <h3>Make Money with Us</h3>
                              <p className='bld'>Sell on Amazon</p>
                              <p className='bld'>Sell under Amazon Accelerator</p>
                              <p className='bld'>Protect and Build Your Brand</p>
                              <p className='bld'>Amazon Global Selling</p>

                        </div>
                        <div className="footr_details_one forres">
                              <h3>Let Us Help You</h3>
                              <p className='bld'>COVID-19 and Amazon</p>
                              <p className='bld'>100% Purchase Protection</p>
                              <p className='bld'>Amazon App Download</p>
                              <p className='bld' >Help</p>

                        </div>
                  </div>
                  <div className="lastdetails">
                        <img src={mainLogo} alt="logo" />
                        <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year},<b> Amazon.com </b>, Inc. or <b>Mr. Swamy Burande</b></p>
                  </div>
            </footer>
      )
}

export default Footer;