import React from "react";
import style from "./UserInfo.module.css";
import infoCircle from "../../../image/info-circle.png";
import addWallet from "../../../image/add.png";
import Form from "./Form";

function UserInfo() {
  return (
    <div className={style.block}>
      <label className={style.email}>
        E-mail
        <input type="text" />
      </label>
      <div className={style.connected_wallet}>
        <p>Connected wallet</p>
        <img src={infoCircle} alt="" />
      </div>
      <div className={style.add_wallet}>
        <img src={addWallet} alt="" />
        <span>Add new wallet </span>
      </div>
      <p className={style.user_info}>User Info</p>
      <Form />
    </div>
  );
}

export default UserInfo;
