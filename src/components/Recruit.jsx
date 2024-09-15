import React from 'react'
import nexon from '../assets/image/recruit.png'
import nexon_btn from '../assets/image/btn.png'

// function MyButton() {
//   const handleClick = () => {
//     alert('버튼이 클릭되었습니다!');
//   }
// };

const Recruit = () => {
  return (
    <section id='recruit'>
      <div className='recruit__inner'>
        <div className='recruit__text'>
            <p>Recruit</p>
              <div className="recruit__title">
                <h1>Careers</h1>
                <h3>넥슨 게임즈는 새로운 재미, 교류와 공감의 세계를<br/>
                    창조할 게이머들과 함께하고 싶습니다.</h3>
              </div>
        </div>
        <div className='recruit__inform'>
          <dl>
            <dt>채용제도</dt>
            <dd>공개채용</dd>
          </dl>
          <dl>
            <dt>채용방법</dt>
            <dd>온라인 채용</dd>
          </dl>
          <dl>
            <dt>채용대상</dt>
            <dd>신입 / 경력직(포트폴리오 첨부)</dd>
          </dl>
          <dl>
            <dt>지원자격</dt>
            <dd>각 부서 채용공고 참고</dd>
          </dl>
        </div>
      </div>

      <div className="recruit__btn">
        <a href="/"><strong>VIEW CASE</strong></a>        
        <img src={nexon_btn} alt="nexon_btn" />
      </div>

      <div className='recruit__img'>
        <img src={nexon} alt="nexon" />
      </div>
      {/* <div className='recruit__btn'>
        <input className="btn" type="button">VIEW CASE</input>
      </div>    */}



    </section>
  )
}

export default Recruit