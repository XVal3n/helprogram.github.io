import React, {useState} from 'react'
import Logo from "../assets/image-removebg-preview.png"
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
       <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/"> Inicio </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> Nosotros </Link>
        <Link to="/contact"> Contacto </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>

      </div> 

      
    </div>
  )
}

export default Navbar
