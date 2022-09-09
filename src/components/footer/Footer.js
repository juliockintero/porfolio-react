import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1> Julio Cesasr Quintero Leal</h1>
            <p>Colombia</p>
        </div>
        <div className='footer-contact'>
            <h3> Contact me</h3>
            <p> And let's get down to work</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                J.Q
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/julio-cesar-quintero-leal-018325201/'><i className='fab fa-linkedin linkedin'></i></a>
                <a href='https://www.instagram.com/ktceras/'><i className='fab fa-instagram instagram'></i></a>
                <a href='https://github.com/juliockintero'><i className='fab fa-github github'></i></a>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer