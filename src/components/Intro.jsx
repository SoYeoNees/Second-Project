import React from "react";

import about from "../assets/image/홈페이지PSD.png";


const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__text">
                    <div className="text">
                        <p>We Make Games Better</p>
                        <p>NEXON Games</p>                      
                    </div>
                    <div className="text__p">
                        <p>일상을 뛰어넘는 참신한 재미를 만듭니다.</p>
                        <p>놀라운 경험을 선사하는 새로운 세계를 창조합니다.</p>
                    </div>
                </div>
                <div className="intro__img">
                    <img src={about} alt="어바웃" />
                </div>
            </div>
            {/* <div className="w-full">
                <div className="w-[1200px]">
                    이미지
                </div>
                <div>라인</div>
            </div> */}
            {/* http://seik1224.dothome.co.kr/lango/index.html */}
        </section>
    );
};

export default Intro;