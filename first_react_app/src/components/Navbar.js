import React from 'react'
import Footer from './Footer'
function Navbar(props) {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Navbar
