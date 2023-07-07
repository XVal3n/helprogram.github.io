import React from 'react'
import {MenuList} from "../helpers/MenuList"
import MenuItem from "../componentes/MenuItem"
import "../Styles/Menu.css"

function Menu() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Lenguajes de Programación</h1>
        <div className="menuList"> {MenuList.map((menuItem, key) => {
            return  <MenuItem 
            key={key}
            textUno={menuItem.textUno}
            image={menuItem.image} 
            name={menuItem.name} 
            price={menuItem.price}
            text={menuItem.text} />
        } )} 
        
        </div>
        
        </div>
    );
  }
 

export default Menu
