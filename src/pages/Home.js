import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from "../assets/img-llave-de-la-programacion.jpg"
import "../Styles/Home.css";

function Home() {
  return(
    <div className='home'  style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        
        <h1> HelProgram </h1>
        <p> Te ayudamos con tus problemas de Programacion.</p>
        <Link to="/menu">
          <button> Entra Aquí </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
