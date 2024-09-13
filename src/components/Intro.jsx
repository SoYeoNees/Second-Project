import React from "react";

import about from "../assets/image/홈페이지PSD.png";

const introText = {
  title: ["We Make Games Better", "NEXON Games"],
  desc: ["일상을 뛰어넘는 참신한 재미를 만듭니다.", "놀라운 경험을 선사하는 새로운 세계를 창조합니다."]
}

const Intro = () => {
    return (
        <section id="intro" className="w-full">
            <div className="intro__inner w-[1200px] px-10 mx-auto ">
                <div className="intro__text">
                    <div className="text">
                        <div>We Make Games Better</div>
                        <div>NEXON Games</div>                      
                    </div>
                    <div className="text__p">
                        <p>{introText.desc[0]}</p>
                        <p>{introText.desc[1]}</p>
                    </div>
                </div>
                <div className="img absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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