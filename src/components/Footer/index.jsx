import React from "react";
import Follow from "./Follow";
import style from "./Footer.module.css";
import Nav from "./Nav";
import Subcribe from "./Subscribe";

function Footer() {
  return (
    <footer className={style.container}>
      <div>
        <Subcribe />
        <Follow />
      </div>
      <Nav />
    </footer>
  );
}

export default Footer;
