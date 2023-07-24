import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import mainLogo from "../../assets/amazon_PNG25.png";


function Navbar() {
      return (
            <header>
                  <nav >
                        <div className="left">
                              <div className="navlogo" >
                                    <NavLink to="/" ><img src={mainLogo} alt="main logo" /></NavLink>
                              </div>
                              <div className="nav_searchbaar">
                                    <input type="text" name="" id="" />
                                    <div className="search_icon">
                                          <SearchIcon className="search" />
                                    </div>
                              </div>

                        </div>
                        <div className="right">
                              <div className="nav_btn">
                                    <NavLink to="/login">Signin </NavLink>
                              </div>
                              <div className="cart_btn">
                                    <Badge badgeContent={4} color="primary">
                                          <ShoppingCartIcon id="icon" />
                                    </Badge>
                                    <p>Cart</p>
                              </div>
                              <Avatar className="avtar" ></Avatar>
                        </div>
                  </nav>
            </header>
      )
}

export default Navbar;
