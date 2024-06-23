import React from 'react'
import './CSS/About.css'
import about_img from '../Components/Assets/aboupageimg/bg.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-main">
        <div className="about-header">
          <h3>ABOUT US</h3>
          <h1>At E-com store, our mission is to democratize publishing and eCommerce one website at a time.</h1>
          <p>We're a hosted version of the open source software, WordPress. Because when you have the freedom to create, express yourself, and earn money online, the impossible becomes business as usual.</p>
        </div>
      </div>
      <div className='about-body'>
        <div className="abour-right">
          <img src={about_img} alt="" />
        </div>
        <div className="abour-left">
        <p>WHAT WE BELIEVE</p>
        <h1>Anyone can have an idea. We want you to have the power and support to get it online.</h1>
        </div>
      </div>
    </div>
  )
}

export default About