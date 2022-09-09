import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología clásica</p>
      </div>
      <div className='about-img'>
        <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" alt="" />

      </div>
    </div>

  )
}

export default About