import React from "react";
import style from "./Header.module.css";
import oazizLogo from "../../image/oaziz-logo-black.png";
import global from "../../image/global.png";
import seacrh from "../../image/search-normal.png";
import arrowDown from "../../image/arrow-down.png";

function Header() {
  return (
    <header className={style.container}>
      <div className={style.block}>
        <img src={oazizLogo} alt="merkeleon-logo" className={style.logo} />
      </div>
      <div className={style.block}>
        <div className={style.buttons}>
          <img src={seacrh} alt="seacrh" className={style.button_search} />
          <div className={style.button_discover}>
            <span className={style.text}>Discover</span>
            <img
              src={arrowDown}
              alt="arrow-down"
              className={style.arrow_down}
            />
          </div>
          <p className={`${style.button_activity} ${style.text}`}>Activity</p>
          <div className={style.button_community}>
            <span className={style.text}>Community</span>
            <img
              src={arrowDown}
              alt="arrow-down"
              className={style.arrow_down}
            />
          </div>
          <img src={global} alt="global" className={style.global} />
          <p className={`${style.language} ${style.text}`}>en</p>
        </div>
        <div className={style.button_theme}></div>
        <div className={style.button_create}>Create</div>
      </div>
    </header>
  );
}

export default Header;
