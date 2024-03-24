import React from "react";
import { Element } from "react-scroll";
import { IoIosArrowRoundDown } from "react-icons/io";

const Intro = () => {
  return (
    <Element name="intro">
      <div className="intro">
        <div className="intro-content h-screen flex flex-col items-center justify-center">
          <div className="intro-content-left flex flex-col justify-center items-center max-md:mb-10">
            <div className="box-wapper mb-5 max-xl:mt-10">
              <div className="box"></div>
              <strong className="makeit popins text-5xl font-thin max-md:text-4xl max-xl:block max-md:text-center text-animate mb-2 mx-4">
                Make it More
              </strong>
              <strong className="appealing text-7xl font-bold max-md:text-6xl max-xl:block  max-md:text-center text-animate">
                Appealing,
              </strong>
            </div>
            <span className="box-02 text-lg mb-32"></span>
            <div className="text-wapper">
              <p className="font-light text-xl max-md:text-base text-center">
                웹디자이너 경험과 프론트엔드 개발 경험을 바탕으로
              </p>
              <p className="font-light text-xl max-md:text-base text-center">
                한 번 더 들여다보게 만드는{" "}
                <b className="font-semibold">매력적인 웹사이트를</b>{" "}
                만들겠습니다.
              </p>
            </div>
            {/* <div className="sticker-img">
              <figure className="box-item box-01 w-2/12 max-md:w-2/12">
                <img src="/img/jsx-img-01.png" alt="js 글자 이미지" />
              </figure>
            </div> */}
          </div>
          <div className="yellow-line font-light p-2">
            <div className="flow-container">
              <div className="flow-text">
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
                <div className="flow-wrap">
                  FrontEnd Publisher Developer UI/UX &emsp; 프론트엔드 퍼블리셔
                  개발자 사용자 인터페이스/사용자 경험
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-dwon">
            <IoIosArrowRoundDown />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Intro;
