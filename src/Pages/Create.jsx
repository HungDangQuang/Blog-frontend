import HeaderAd from "../components/admin/layout/HeaderAd";
import CreatePost from "../components/create/createPost";
import Navbar from "../components/admin/layout/NarBar";
import React from "react";
import "../style/admin.css";
export default function Create() {
  return (
    <>
      <HeaderAd />
      <div className="css_contaner">
        <div className="nar_post">
          <Navbar />
        </div>
        <div className="post_list">
          <CreatePost />
        </div>
      </div>
    </>
  );
}
