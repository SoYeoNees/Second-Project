import React from 'react'

import bg from "../assets/image/introducebg.png";

const Introduce = () => {
  return (
    <section id='introduce'>
      <div className='introduce__inner'>
        <div className='introduce__text'>
            <p className='text'>Introduce</p>
              <div className="introduce__title">
                <h1>Who we are</h1>
                <h3>우리는 더 좋은 게임(Better Game)을 만들고 <br/>
                    세상에 보여주기 위해 모였습니다.</h3>
              </div>
        </div>
        <div className="img">
          <img src={bg} alt="배경" />
        </div>
      </div>
    </section>
  )
}

export default Introduce