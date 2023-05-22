import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[49px] text-white ss:leading-[100px] leading-[75px]">
          <span className="text-gradient ">La Transparencia</span> es nuestra{" "}
          <br className="sm:block hidden" />{" "}
        </h1>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[49px] text-white ss:leading-[100px] leading-[75px] w-full">
        misión
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5}`}>
        La nueva herramienta de contabilidad para inversores y traders. Un
        ecosistema único de servicios.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src="src\assets\img\ledgetizesoftwarepannel.jpg"
        alt="..."
        className="max-w-full rounded-lg shadow-xl z-10"
        style={{
          transform:
            "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg) ",
        }}
      ></img>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default Hero;
