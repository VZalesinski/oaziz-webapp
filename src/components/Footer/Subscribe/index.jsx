import React from "react";
import style from "./Subscribe.module.css";
import oazizLogo from "../../../image/oaziz-logo-white.png";
import arrowRight from "../../../image/arrow-right.png";
function Subcribe() {
  return (
    <>
      <img src={oazizLogo} alt="oazizLogo" />
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis, nullam
        nulla magna semper velit eleifend lacinia, leo aliquet ridiculus et
        penatibus luctus justo.
      </p>
      <div className={style.block}>
        <input placeholder="Email address" className={style.input} />
        <div className={style.button}>
          <span>Subscribe</span>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>
    </>
  );
}

export default Subcribe;
