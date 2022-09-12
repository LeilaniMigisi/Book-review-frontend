import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <h1>About</h1>
    <div className="about">
    <div className="img">
    <img src={process.env.PUBLIC_URL + 'https://s.gr-assets.com/assets/about/headerImages/About-Carousel-1-4ecdb327a458a36e6e897abe7839e3b9.jpg'} alt="oops" className='image1'></img>
    </div>
        <div className="content">
            <p>ALWAYS BOOKS. NEVER BORING.</p>
            <p>At Fantasy Book Review we are dedicated to reading and reviewing the very best fantasy books for both children and adults (both young and old).</p>
            
        </div>
    </div>
    <div className="about">
        <div className="content">
            <p>Help book lovers and literature enthusiast all over the world to identify and acquire new tastes through giving articulate and helpful reviews</p>
        </div>
        <div className="img">
        {/* <img src={process.env.PUBLIC_URL + '/images/istockphoto-694189032-170667a.jpg'} alt="Valentine" className='image1'></img> */}
        </div>
    </div>
    </>
    
  )
}

export default About