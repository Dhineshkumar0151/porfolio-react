import React, { useState } from 'react';
import './Navbar.css';
import { GrContact } from "react-icons/gr";
import  portfolio from '../components/porfolio.png'; 
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <nav className='navbar'>
       <img src={portfolio} alt='logo' className='logo' />
        <div className='desktopmenu'>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='intro' className='desktoplink'>Home</Link>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='skills' className='desktoplink'>About</Link>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='works' className='desktoplink'>Portfolio</Link>

        </div>
        <button className='desktopbutton' onClick={()=>{document.getElementById('contects').scrollIntoView({behavior:'smooth'});} }>
        <GrContact className='desktopmenuimg' />Contact Me</button>

            <CiMenuBurger  className='mobilemenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navmenu' style={{display: showMenu? 'flex':'none'}} >
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='intro' className='listitme' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='skills' className='listitme' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='works' className='listitme' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='contects' className='listitme' onClick={()=>setShowMenu(false)}>Contact</Link></div>
    </nav>
  )
}

export default Navbar