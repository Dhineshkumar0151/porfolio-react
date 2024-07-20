import React, { useState } from 'react'
import './works.css';
import com from '../image/com.jpg';
import communication from '../image/communication.jpg';
import hardwork from '../image/hardwork.jpg';
import leader from '../image/teamleader.jpg';
import programmer from '../image//programmer.jpg';
import time from '../image/time.jpg';
import self from '../image/self.jpg';
import communu from '../image/commu.jpg';
import problem from '../image/problemsolve.jpg';




const Works = () => {
  const [selected,setselected] = useState(false);
  const more = () => {
    
    setselected(prevselected => !prevselected)
  };
  return (
    <section id='works'>
    <h2 className='worktitle'>My Portfolio</h2>
    <span className='workdesc'>I am a dedicated professional with a strong foundation in effective communication, problem-solving, and teamwork. My ability to articulate ideas clearly and collaborate seamlessly with colleagues enables me to drive projects to successful completion. I excel in building relationships, adapting to diverse environments, and resolving conflicts with a calm and rational approach. My attention to detail and commitment to excellence ensure that I consistently deliver high-quality results. </span>
    <div className='worksimgs'>
        <img src={com} alt='com' className='worksimg' />
        <img src={communication} alt='communication' className='worksimg' />
        <img src={hardwork} alt='hardwork' className='worksimg' />
        <img src={leader} alt='leader' className='worksimg' />
        <img src={programmer} alt='programmer' className='worksimg' />
        <img src={time} alt='time' className='worksimg' />
    </div>
    <div className='worksimgs1' style={{display : selected ? 'block' : 'none'}}>
    <img src={self} alt='com' className='worksimg' />
        <img src={communu} alt='communication' className='worksimg' />
        <img src={problem} alt='hardwork' className='worksimg' />
    </div>
    <button className='btn-work' onClick={more}>{selected ? 'See Less...' : 'See More...'}</button>
    </section>
  )
}

export default Works