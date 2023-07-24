import { useState, useEffect } from "react";
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/header/Navbar';
import MainComponent from './components/home/MainComponent';
import NewNavbar from './components/new navbar/NewNavbar';
import Signup from './components/signup_signin/Signup';
import Signin from './components/signup_signin/Signin';
import { Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import BuyNow from './components/BuyNow/BuyNow';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])
  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <NewNavbar />
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/getSingleProduct/:id" element={<Cart />} />    {/* getproductsone/:id   BuyNow*/}
              <Route path="/buynow" element={<BuyNow />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <h2> Loading....</h2>
          </div>
        )
      }
    </>
  );
}

export default App;
