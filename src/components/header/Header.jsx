import React, { useState } from "react";
import {links} from "../../Data";
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";
import '../../App.css';
import './header.css';
import { useEffect } from 'react';
import {Link} from 'react-scroll';
import { animateScroll } from 'react-scroll';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  return(
    <header className={`${scrollNav ? 'scroll-header' : ''} header`} >
      <nav className="nav">
        <Link to='/' onClick={scrollTop} href="" className="nav__logo text-cs">Home</Link>

        <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
          <div className="nav__Data">
            <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path}, index) => {
                return(
                  <li className="nav__item" key={index}>
                    <Link
                    className="nav__link text-cs"
                    to={path}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    //hace que desaraezca el menu al hacer click
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                  </li>
                );
              })}
            </ul>

            <div className="header__socials">
                <a href='' className="header__social-link">
                    <FaInstagram />
                </a>
                <a href='' className="header__social-link">
                <FaFacebook />
                </a>
                <a href='' className="header__social-link">
                <FaLinkedin />
                </a>
            </div>

            </div>
          </div>
        </div>
        <div className="nav__btns">
          
          <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
              <span></span>
              <span></span>
            </div> 
        </div>
      </nav>
    </header>
  )
}



export default Header;