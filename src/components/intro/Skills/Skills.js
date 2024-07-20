import React from 'react'
import './skills.css';
import frontend from '../../image/frontend.jpg';
import backend from '../../image/backend.jpg'
import database from '../../image/Database.jpg'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='title'>What I do</span>
        <span className='skilldes'> I am proficient in Python and JavaScript, with a strong foundation in HTML and CSS for building responsive web interfaces. I specialize in developing dynamic applications using React and Node.js, and have experience with both SQL and NoSQL databases. My expertise extends to using Git for version control. I am adept at problem-solving, effective communication, and working within Agile development environments.</span>
        <div className='skillsBars'>
            <div className='skillsbar'>
                <img src={frontend} alt='skills' className='skillimg'/>
                <div className='skillbartext'>
                    <h2>Front-End developer</h2>
                    <p>I am a front-end developer skilled in HTML, CSS, and JavaScript, dedicated to creating responsive and visually appealing user interfaces. I focus on clean, efficient code and thrive in collaborative environments, consistently delivering high-quality results</p>
                </div>
            </div> 
            <div className='skillsbar'>
                <img src={database} alt='skills' className='skillimg'/>
                <div className='skillbartext'>
                    <h2>Knowlodge about DataBase</h2>
                    <p>I have a solid understanding of database management, including SQL and NoSQL databases. I excel at designing efficient database schemas, optimizing queries, and ensuring data integrity and security. My expertise enables me to handle complex data sets and support robust backend systems.</p>
                </div>
            </div> 
            <div className='skillsbar'>
                <img src={backend} alt='skills' className='skillimg'/>
                <div className='skillbartext'>
                    <h2>Back-End developer</h2>
                    <p>I am a proficient back-end developer with expertise in server-side programming, database management, and API integration. Skilled in languages such as Python, Java, and Node.js, I excel at building scalable and secure backend systems that support seamless front-end interactions.</p>
                </div>
            </div> 
        </div>

    </section>

  )
}

export default Skills