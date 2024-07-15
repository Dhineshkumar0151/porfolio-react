import React, { useRef } from 'react'
import './contact.css';
import insta from '../insta.jpg';
import whatsapp from '../whatsapp.jpg';
import github from '../github.png';
import linkedin from '../linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xp2o63o', 'template_czmpmvu', form.current, {
            publicKey: 'OnEdLVmaOtTqQ7miB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('email sent');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <section className='contactPage'>
       {/* <div id='client'>
            <h1 className='clienttitle'>My Clients</h1>
            <p className='clientDesc'>I have had the opportunity to work a diverse group of companies. Some of the notable companies I have worked with includes..</p>
            <div className='clientimgs'>
                <img src={insta} alt='client' className='clientimg'/>
                <img src={whatsapp} alt='client' className='clientimg'/>
                <img src={github} alt='client' className='clientimg'/>
                <img src={linkedin} alt='client' className='clientimg'/>
            </div> 
        </div>*/}
        <div id='contects'>
            <h1 className='clienttitle'>Contact Me</h1>
            <span className='contactdesc'>Please fill out the form below to discuss any work opportunity</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea name='message' rows="5" placeholder='Your Message' className='Msg'></textarea>
                <button className='btnform' type='submit' value='Send'>SUBMIT</button>
                <div className='links'>
                    <img src={insta} alt='' className='contactimg' />
                    <img src={whatsapp} alt='' className='contactimg' />
                    <img src={github} alt='' className='contactimg' />
                    <img src={linkedin} alt='' className='contactimg' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact