import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {

   const [mobile, setMobile] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-body _container">
        <h3 className="navbar-logo">Logo</h3>
        <ul className= {mobile ? "navbar-links-mobile" : "navbar-links"}>
          <Link to="/" end>
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contacts">
            <li>Contacts</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
            {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
