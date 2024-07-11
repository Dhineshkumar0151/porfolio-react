import React from 'react'
import './intro.css';
import dhinesh from '../dhineshPhoto.png'
import { Link } from 'react-scroll';
import { RiLogoutBoxRFill } from "react-icons/ri";

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='introname'>Dhineshkumar</span><br/> Website Designer</span>
            <p className='intropara'>Hi there! I'm Frasher, a passionate and dedicated IT professional with a strong background  in fullstack development. I have completed a comprehensive fullstack Python course, and I hold a degree in M.sc(IT). My expertise spans across various aspects of web development, from crafting intuitive user interfaces to building robust backend systems.</p>
            <Link><button className='btn'><RiLogoutBoxRFill/>Hire Me</button></Link>
        </div>
        <img src={dhinesh} alt='' className='bgimg'/>
    </section>
  )
}

export default Intro