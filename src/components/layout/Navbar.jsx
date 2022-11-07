import React from 'react'
import { Link } from "react-router-dom";
import style from "./style.module.css"

function Navbar() {
  const { menu, navitem, donate, btn1, active } = style;

  const guestLinks = (
    <div className={menu}>
      <div className={navitem}>
        <div>
          <ul>
            <li className={donate}><Link to="/" className="btn1">DONATE</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to="/" className={[btn1, active].join(' ')} active>Home</Link></li>
            <li><Link to="/login" className="btn1">Log In</Link></li>
            <li><Link to="/regester" className="btn1">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {guestLinks}
    </div>
  )
}

export default Navbar
