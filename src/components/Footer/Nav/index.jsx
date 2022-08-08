import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <div className={style.container}>
      <div className={style.block}>
        <p className={style.title}>Marketplace</p>
        <p className={style.item}>All NFTs</p>
        <p className={style.item}>New</p>
        <p className={style.item}>Trending</p>
      </div>
      <div className={style.block}>
        <p className={style.title}>Company</p>
        <p className={style.item}>About Us</p>
        <p className={style.item}>Contact Us </p>
        <p className={style.item}>Blog</p>
        <p className={style.item}>Community</p>
      </div>
      <div className={style.block}>
        <p className={style.title}>Support</p>
        <p className={style.item}>Help Center</p>
        <p className={style.item}>Term Of Service</p>
        <p className={style.item}>Privacy Police</p>
      </div>
    </div>
  );
}

export default Nav;
