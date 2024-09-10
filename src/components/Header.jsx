import React, { useState } from 'react';
import myImage from '../assets/image/logo.png';
import langImage from '../assets/image/지구.png';
import Image from '../assets/image/사각형4.png';

const headerNav = [
  {
    title: "소개",
    url: "#intro"
  },
  {
    title: "게임",
    url: "#game"
  },
  {
    title: "채용",
    url: "#hire"
  },
  {
    title: "투자정보",
    url: "#inform"
  },
  {
    title: "미디어",
    url: "#media"
  }
]

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  }
  return (
    <header id="header" role="banner">
    <div className="header__inner">
        <div className="header__logo">
          <a href="/"><img src={myImage} alt="logo" /></a>        
        </div>
        <nav className={`header__nav ${show ? 'show': ''}`} role="navigation" aria-label="메인 메뉴">
            <ul>
               {headerNav.map((nav, key) => (
                <li key={key}>
                  <a href={nav.title}>{nav.title}</a>
                </li>
               ))}
            </ul>
        </nav>
        <div className="header__lang">
          <ul>
            <li>
              <a href="/" className='lang'><img src={langImage} alt="language" /></a>          
            </li>
            <li>
              <a href="/" className='down'><img src={Image} alt="화살표" /></a>          
            </li>
          </ul>
        </div>

        <div 
            className="header__nav__mobile" 
            id="headerToggle" 
            aria-controls="primary-menu" 
            aria-expanded={show ? "true":"false"} 
            role="button" 
            tabIndex="0"
            onClick={toggleMenu}
        >
            <span></span>
        </div>
    </div>
</header>
  )
}

export default Header