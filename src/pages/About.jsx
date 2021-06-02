import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
  <section className='about'>
      <div className="about-head">
        <h2>SPP</h2>
        <p>Solar Power Philippines</p>
      </div>

      <div className='about-text space'>
        <p>Solar Power Philippine is made so we can have a visual representation of how many people already using solar power.</p>
        <p>This is not limited to any group, it is for everyone consumption.</p>
      </div>

      <div>
        <p>Maintained by: A member of Solar Power Philippines</p>
      </div>

      <div>
        <p>Please email of any concern</p>
        <a href="mailto:spup2021@gmail.com?subject=Mail from Our Site">Send mail</a>
      </div>

      <div className='space'>
        <p>Security notice: Please do not put your actual email password, instead create a new one.</p>
        <p>All Password is being hash or encrpted, even me as a developer will not be able to access your information.</p>
      </div>

      
      <div>
        <Link to='/'>Map</Link>
      </div>
    

      <footer>
        <p>Solar Power Philippines license: MIT 2021</p>
      </footer>
    </section>
  )
}

export default About
