import React from 'react';
import "./BuyNow.css";
import { Divider } from '@mui/material';
import Option from "./Option";
import SubTotal from './SubTotal';
import Right from './Right';

const BuyNow = () => {
      return (

            <div className="buynow_section">
                  <div className="buynow_container">
                        <div className="left_buy">
                              <h1>Shopping Cart</h1>
                              <p>Select all items</p>
                              <span className="leftbuyprice">Price</span>
                              <Divider />
                              <div className="item_containert">
                                    <img src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70" alt="imgitem" />
                                    <div className="item_details">
                                          <h3>Sandwich Toaster</h3>
                                          <h3>Premium sandwich toaster from Bajaj.</h3>
                                          <h3 className="diffrentprice">₹1200.00</h3>
                                          <p className="unusuall">Usually dispatched in 8 days.</p>
                                          <p>Eligible for FREE Shipping</p>
                                          <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                          <Option />
                                    </div>
                                    <h3 className="item_price">₹1200.00</h3>
                              </div>
                              <Divider />
                              <SubTotal />
                        </div>
                        <Right />
                  </div>
            </div>
      )
}

export default BuyNow;