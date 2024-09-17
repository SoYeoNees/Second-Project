import React from 'react'

import bg from "../assets/image/introducebg.png";

import circle01 from "../assets/image/V4.png";
import circle01_on from "../assets/image/v4hover.png";
import circle01_logo from "../assets/image/v4로고.png";
import circle02 from "../assets/image/히트.png";
import circle02_on from "../assets/image/히트hover.png";
import circle02_logo from "../assets/image/히트로고.png";
import circle03 from "../assets/image/서든어택.png";
import circle03_on from "../assets/image/서든hover.png";
import circle03_logo from "../assets/image/서든로고.png";
import circle04 from "../assets/image/블루아카이브.png";
import circle04_on from "../assets/image/블루hover.png";
import circle04_logo from "../assets/image/블루로고.png";

const Introduce = () => {
  return (
    <section id='introduce'>
      <div className='introduce__inner'>
        <div className='introduce__text'>
            <p>Introduce</p>
              <div className="introduce__title">
                <h1>Who we are</h1>
                <h3>우리는 더 좋은 게임(Better Game)을 만들고 <br/>
                    세상에 보여주기 위해 모였습니다.</h3>
              </div>
        </div>
      </div>

      <div className='introduce__hover'>
        <div className="img">
          <img src={bg} alt="배경" />
        </div>
        
        <div className='introduce__circle'>
          <div className='circle'>
            <div className='circle01'>
              <img src={circle01} />
              <img src={circle01_on} />
            </div>
            <div className='circle01_logo'>
              <img src={circle01_logo} />
            </div>
            <div className='circle02'>
              <img src={circle02} />
              <img src={circle02_on} />
            </div>
            <div className='circle02_logo'>
              <img src={circle02_logo} />
            </div>
            <div className='circle03'>
              <img src={circle03} />
              <img src={circle03_on} />
            </div>
            <div className='circle03_logo'>
              <img src={circle03_logo} />
            </div>
            <div className='circle04'>
              <img src={circle04} />
              <img src={circle04_on} />
            </div>
            <div className='circle04_logo'>
              <img src={circle04_logo} />
            </div>
          </div>
          <div className='circle-hover'>
            <div className='circle01'></div>
            <div className='circle02'></div>
            <div className='circle03'></div>
            <div className='circle04'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

 {/* http://seik1224.dothome.co.kr/lango/index.html */}

export default Introduce