import React from "react";

import about from "../assets/image/홈페이지PSD.png";

const introText = {
  title: ["We Make Games Better", "NEXON Games"],
  desc: ["일상을 뛰어넘는 참신한 재미를 만듭니다.", "놀라운 경험을 선사하는 새로운 세계를 창조합니다."]
}

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.title[0]}</div>
                        <div>{introText.title[1]}</div>                      
                    </div>
                    <div className="text__p">
                        <p>{introText.desc[0]}</p>
                        <p>{introText.desc[1]}</p>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
              
            </div>
        </section>
    );
};

export default Intro;