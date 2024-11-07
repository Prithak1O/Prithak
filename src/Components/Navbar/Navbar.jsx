import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1 className='logo'>Prithak</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li>
          <Link 
            className='anchor-link' 
            to="home" 
            smooth={true} 
            offset={-50} 
            duration={500} 
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className='anchor-link' 
            to="about" 
            smooth={true} 
            offset={-50} 
            duration={500} 
            onClick={() => setMenu("about")}
          >
            About-Me
          </Link>
        </li>
        <li>
          <Link 
            className='anchor-link' 
            to="services" 
            smooth={true} 
            offset={-50} 
            duration={500} 
            onClick={() => setMenu("services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            className='anchor-link' 
            to="project" 
            smooth={true} 
            offset={-50} 
            duration={500} 
            onClick={() => setMenu("projects")}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            className='anchor-link' 
            to="footer" 
            smooth={true} 
            offset={-50} 
            duration={500} 
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link 
        className="nav-connect" 
        to="contact" 
        smooth={true} 
        offset={-50} 
        duration={500} 
        onClick={() => setMenu("contact")}
      >
        Connect
      </Link>
    </div>
  );
}

export default Navbar;
