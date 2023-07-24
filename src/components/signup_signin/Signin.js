import React, { useState, useContext } from 'react';
import "./Signup.css";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from "../context/ContextProvider.js";

function Signin() {
      const { account, setAccount } = useContext(Logincontext);

      const [logdata, setData] = useState({
            email: "",
            password: ""
      });

      // console.log(data);

      const adddata = (e) => {
            const { name, value } = e.target;
            // console.log(name, value);

            setData((pre) => {
                  return {
                        ...pre,
                        [name]: value
                  }
            })
      };

      const senddata = async (e) => {
            e.preventDefault();

            const { email, password } = logdata;
            // console.log(email, password);
            try {
                  const res = await fetch("http://localhost:9000/login", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                              email, password
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
                        setAccount(data);
                        setData({ ...logdata, email: "", password: "" })
                        toast.success("Login successful! 😃", {
                              position: "top-center"
                        });
                  }
            } catch (error) {
                  console.log("login page ka error" + error.message);
            }
      };
      return (
            <>
                  <section>
                        <div className="sign_container">
                              <div className="sign_header" >
                                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                              </div>

                              <div className="sign_form">
                                    <form method="POST">
                                          <h1 className="">Sign-In</h1>
                                          <div className="form_data">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email"
                                                      onChange={adddata}
                                                      value={logdata.email}
                                                      id="email" />
                                          </div>
                                          <div className="form_data">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password"
                                                      onChange={adddata}
                                                      value={logdata.password}
                                                      id="password" placeholder="At least 6 characters" />
                                          </div>
                                          <button type="submit" className="signin_btn" onClick={senddata}>Sign-In</button>
                                    </form>
                                    <ToastContainer />
                              </div>
                              <div className="create_accountinfo">
                                    <p><b>New to Amazon?</b></p>
                                    <button className="hvr" >  <NavLink to="/register">Create your Amazon Account</NavLink></button>
                              </div>
                        </div>
                  </section>
            </>
      )
}

export default Signin;