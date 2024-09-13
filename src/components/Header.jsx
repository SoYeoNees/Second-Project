import React, { useState } from 'react';
import myImage from '../assets/image/logo.png';
import langImage from '../assets/image/image_지구본.png';

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
          <a href="/"><img src={langImage} alt="language" /></a>          
        </div>
    </div>
</header>
  )
}

export default Header