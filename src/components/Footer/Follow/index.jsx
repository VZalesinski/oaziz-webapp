import React from "react";
import style from "./Follow.module.css";
import Telegram from "../../../image/Telegram.png";
import Instagram from "../../../image/Instagram-footer.png";
import Discord from "../../../image/Discord.png";
import Reddit from "../../../image/Reddit.png";
import Twitter from "../../../image/Twitter-footer.png";

function Follow() {
  return (
    <div className={style.block}>
      <span className={style.title}>Follow Us</span>
      <span className={style.line}></span>
      <img src={Discord} alt="Discord" className={style.img} />
      <img src={Twitter} alt="Twitter" className={style.img} />
      <img src={Instagram} alt="Instagram" className={style.img} />
      <img src={Reddit} alt="Reddit" className={style.img} />
      <img src={Telegram} alt="Telegram" className={style.img} />
    </div>
  );
}

export default Follow;
