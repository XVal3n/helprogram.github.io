import React from 'react'

function MenuItem({ image, name, price, text, textUno}) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {text} </p>
      <p> {textUno} </p>
      <p> {price} </p>
    </div>
  )
}

export default MenuItem

