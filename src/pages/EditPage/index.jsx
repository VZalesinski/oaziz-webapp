import React from "react";
import Header from "../../components/Header";
import style from "./EditPage.module.css";
import arrowLeft from "../../image/arrow-left.png";
import galleryEdit from "../../image/gallery-edit.png";
import avatar from "../../image/avatar-donut.png";
import UserInfo from "./UserInfo";
import twitter from "../../image/twitter.png";
import instagram from "../../image/instagram.png";
import addCircle from "../../image/add-circle.png";
import { Label } from "./UserInfo/Form";
import Footer from "../../components/Footer";
function EditPage() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <main className={style.container}>
          <div className={style.button_back}>
            <img src={arrowLeft} alt="arrow-left" />
            <span>Back to Profile</span>
          </div>
          <div className={style.block_profile_cover}>
            <div className={style.button_edit_cover}>
              <img src={galleryEdit} alt="gallery-edit" />
              <span>Edit Cover</span>
            </div>
          </div>
          <div className={style.block_avatar}>
            <div className={style.avatar}>
              <img src={avatar} alt="" />
            </div>
            <div className={style.button_edit_profile_img}>
              <img src={galleryEdit} alt="gallery-edit" />
              <span>Edit Profile Image</span>
            </div>
          </div>
          <div className={style.profile_info_block}>
            <p className={style.profile_info_title}>Profile Info</p>
            <div className={style.block_buttons_mode}>
              <div className={`${style.button_mode} ${style.active}`}>
                User Info
              </div>
              <div className={`${style.button_mode}`}>Security</div>
            </div>
            <UserInfo />
            <p className={style.social_network_title}>Social Network</p>
            <div className={style.social_network_block}>
              <div className={style.instargam}>
                <img src={instagram} alt="instargam" />
                <span>@onlysonly</span>
              </div>
              <div className={style.twitter}>
                <img src={twitter} alt="twitter" />
                <span>@onlysonly</span>
              </div>
              <div className={style.addSocialMedia}>
                <img src={addCircle} alt="add-circle" />
                <span>Add social network</span>
              </div>
            </div>
            <p className={style.web_site_title}>Web Site</p>
            <Label title="Type link" />
            <div className={style.update_info}>Update Info</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default EditPage;
