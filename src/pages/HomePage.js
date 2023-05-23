import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button/Button';
import './HomePage.css'

function HomePage() {
  const userState = useSelector(state => state.user);

  useEffect(() => {
  }, [userState]);
  
  return (
    <div id="home-page">
      {/* Hero Section */}
      <section 
        id='hero' 
        style={{
          backgroundColor: "#ECD2FA",
          width: "100%",
          height: "60vh"
        }}
        className='flex justify-between px-20 py-6'
      >
        {/* 
            TODO:- Text and Shop Now button on the left and image on the right
            Use Flex
        */}
        <div className='flex flex-col justify-between p-20'>
          <div>
            <h1 className='font-semibold text-3xl mb-2'>Flat 20-40% off on all instruments this month!!</h1>
            <p>Shop from a collection of strings, brass, percussion, woodwinds of various brands...</p>
          </div>
          <button 
            style={{
                backgroundColor: "#FB2E86"
            }} 
            className={`text-white rounded w-1/4 p-2.5`}
          >
            Shop Now
          </button>
        </div>

        <div id="img-container" style={{backgroundImage: 'url("/denise-jans-rjK8ifDLnIk-unsplash.jpg")'}}>
          {/* <img 
            src={require("../assets/images/denise-jans-rjK8ifDLnIk-unsplash.jpg")} 
            alt="Our Instrument Collection" 
            style={{height: "50vh", width: "80%", marginLeft: "20%"}}
          /> */}
        </div>
      </section>
    </div>
  )
}

export default HomePage