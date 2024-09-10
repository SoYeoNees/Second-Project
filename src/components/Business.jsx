import React from 'react'
import object1 from "../assets/image/Object1.png"
import object2 from "../assets/image/Object2.png"
import object3 from "../assets/image/Object3.png"
import object4 from "../assets/image/Object4.png"
import object5 from "../assets/image/Object5.png"


const businessList = [
    {
        img: object1,
        title: "유저중심",
        desc: "가장 먼저 유저 입장에서 생각합니다."
      },
      {
        img: object2,
        title: "용기",
        desc: "개척자로서의 용기를 냅니다."
      },
      {
        img: object3,
        title: "효율성",
        desc: "정말 필요한 일에 집중합니다."
      },
      {
        img: object4,
        title: "주인의식",
        desc: "한 발자국 더 나아갑니다."
      },
      {
        img: object5,
        title: "커뮤니케이션",
        desc: "명확하게 커뮤니케이션 합니다."
      }
]

const Business = () => {
    return (
        <section id="business">
            <div className='business__inner'>
                <div className='business__text'>
                        <p>Business</p>
                    <div className="business__title">
                        <h1>우리는 유저가 더 즐겁게 게임을 즐길 수 있도록,<br />
                        세상보다 먼저 한 발자국 더 나아갑니다.</h1>
                        <h3>넥슨 게임즈의 방식으로 더 좋은 게임을 만듭니다.</h3>
                    </div>
                </div>
                <div className='business__img'>
                    <ul>
                        {businessList.map((list, key) => (
                        <li key ={key}>
                            <div>
                                <img src={list.img} />
                            </div>
                            <div>
                            <strong>{list.title}</strong>
                            <p>{list.desc}</p>
                            </div>
                        </li>

                        ))}
                    </ul>
                </div>
            </div>

           
        </section>
    );
};

export default Business