import React from 'react'
import myImage from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__logo">
                    <a href="/"><img src={myImage} alt="logo" /></a>        
                </div>

                <div className="footer__familysite">
                    <select className="footer__sitelist">
                        <option value="/">Family Site</option>
                        <option value="/">패밀리사이트2</option>
                        <option value="/">패밀리사이트3</option>
                    </select>
                </div>                
               
                <ul className='footer__address'>
                    <li>
                        <strong>넥슨 게임즈</strong>
                        <span>주소</span>서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층
                    </li>
                    <li>
                        <span>대표이사</span>박용현                       
                    </li>
                    <li>
                        <span>대표번호</span>02.6421.7777
                    </li>
                    <li>
                        <span>이메일</span>contact_us@nexongames.co.kr
                    </li>                        
                </ul>
              
                <div className="footer__right">                
                    @NEXON Games All.Rights Reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer