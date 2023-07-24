import React, { useState } from 'react';
import "./Signup.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Divider } from '@mui/material';



const Signup = () => {
      const navigate = useNavigate();
      const [udata, setUdata] = useState({
            fname: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: ""
      });

      const adddata = (e) => {
            const { name, value } = e.target;
            // console.log(name, value);

            setUdata((pre) => {
                  return {
                        ...pre,
                        [name]: value
                  }
            })
      };

      const senddata = async (e) => {
            e.preventDefault();

            const { fname, email, mobile, password, cpassword } = udata;
            try {
                  const res = await fetch("http://localhost:9000/register", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                              fname, email, mobile, password, cpassword
                        })
                  });
                  const data = await res.json();
                  // console.log(data);
                  if (res.status === 400) {
                        // Form input errors
                        const errorMessage = data.error;
                        toast.error(errorMessage, {
                              position: "top-center"
                        });
                  } else if (res.status === 422 || !data) {
                        toast.error("Invalid Credentials 👎!", {
                              position: "top-center"
                        });
                  } else {
                        setUdata({
                              ...udata, fname: "", email: "",
                              mobile: "", password: "", cpassword: ""
                        });
                        toast.success("User Registered Successfully 😃!, Please Log-In", {
                              position: "top-center"
                        });
                        navigate("/login");
                  }
            } catch (error) {
                  console.log("front end ka catch error hai" + error.message);
            }
      }

      return (
            <section>
                  <div className="sign_container">
                        <div className="sign_header" >
                              <img src="./blacklogoamazon.png" alt="amazonlogo" />
                        </div>
                        <div className="sign_form pd_btm" >
                              <form method="post">
                                    <h1 className="">Sign-Up</h1>
                                    <div className="form_data">
                                          <label htmlFor="name">User name</label>
                                          <input type="text" name="fname"
                                                onChange={adddata}
                                                value={udata.fname}
                                                id="name" />
                                    </div>
                                    <div className="form_data">
                                          <label htmlFor="email">Email</label>
                                          <input type="email" name="email"
                                                onChange={adddata}
                                                value={udata.email}
                                                id="email" />
                                    </div>
                                    <div className="form_data">
                                          <label htmlFor="mobile">Mobile number</label>
                                          <input type="number" name="mobile"
                                                onChange={adddata}
                                                value={udata.mobile}
                                                id="mobile" />
                                    </div>
                                    <div className="form_data">
                                          <label htmlFor="password">Password</label>
                                          <input type="password" name="password"
                                                onChange={adddata}
                                                value={udata.password}
                                                id="password" placeholder="At least 6 characters" />
                                    </div>
                                    <div className="form_data">
                                          <label htmlFor="passwordg">Confirm Password</label>
                                          <input type="password" name="cpassword"
                                                onChange={adddata}
                                                value={udata.cpassword}
                                                id="passwordg" />
                                    </div>
                                    <button onClick={senddata} className="signin_btn hvr" >Sign-up</button>
                                    <Divider />
                                    <div className="signin_info">
                                          <p>Already have an account?</p>
                                          <NavLink to="/login" >Sign in</NavLink>
                                    </div>
                              </form>
                        </div>
                        <ToastContainer />
                  </div>
            </section>
      )
}

export default Signup;