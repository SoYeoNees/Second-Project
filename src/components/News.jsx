import React from 'react'

import sudden from "../assets/image/news1.png";
import games from "../assets/image/news2.png";
import first from "../assets/image/new3.png";
import blue from "../assets/image/news4.png";

const News = () => {
  return (
    <section id='news'>
      <div className='news__inner'>
        <div className='news__text'>
          <p>News</p>
          <div className="news__title">
            <h1>NEXON Games가 전달해온<br />
            Impressive한 순간들</h1>
            <h3>넥슨 게임즈의 소식을 전합니다.</h3>
          </div>
        </div>
      </div>
      
      <div className='news__img'>
        <ul>
          <li>
            <div>
                <img src={sudden} alt="서든어택" />
            </div>
            <div className='text'>
                <div className='year'>
                  <strong>2024</strong>
                </div>
                <div className='title'>
                <strong>서든어택</strong>
                <p>
                  김태현 디렉터 "연내 크로스헤어 다각화 도입한다"
                </p>
                </div>
            </div>
          </li>
          <li>
            <div>
                <img src={games} alt="넥슨게임즈" />
            </div>
            <div className='text'>
                <div className='year'>
                  <strong>2024</strong>
                </div>
                <div className='title'>
                <strong>넥슨게임즈</strong>
                <p>
                  다수 신작 앞세우는 넥슨게임즈, 개발 명가로 입지 다진다
                </p>
                </div>
            </div>
          </li>
          <li>
            <div>
                <img src={first} alt="퍼스트 디센던트" />
            </div>
            <div className='text'>
                <div className='year'>
                  <strong>2024</strong>
                </div>
                <div className='title'>
                <strong>퍼스트 디센던트</strong>
                <p>
                  넥슨게임즈에게 '퍼스트 디센던트'란? "글로벌 속 해답지"
                </p>
                </div>
            </div>
          </li>
          <li>
            <div>
                <img src={blue} alt="블루 아카이브" />
            </div>
            <div className='text'>
                <div className='year'>
                  <strong>2024</strong>
                </div>
                <div className='title'>
                <strong>블루 아카이브</strong>
                <p>
                  드디어 방영된 '블루 아카이브' 애니메이션, 반응은 뜨겁다
                </p>
                </div>
            </div>
          </li>
        </ul>
        {/* <div>라인</div> */}
      </div>
    </section>

    
  )
}

   

export default News