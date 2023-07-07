import React from 'react'
import Programacion from "../assets/seguridad-informatica-1024x439.jpg"
import contacto from "../assets/img_programacion-removebg-preview.png"
import "../Styles/About.css"

function About() {
  return (
    <div className='about'>
     <div className='aboutTop' style={{ backgroundImage: `url(${contacto})` }}></div>
     <div className='aboutBottom'>
     <h1>Sobre Nosotros</h1>
     <p>Somos un grupo de pequeños programadores iniciales que ayuda a aquellos que sabemos que al principio les puede resultar dificil introducirse al nuevo mundo de la programación, que constantemente se va actualizando. HelProgram te ayuda en eso, ofreciendote cursos de varios tipos de lenguaje de programacion que te puedan servir.</p>
     </div>
    </div>
  )
}

export default About
