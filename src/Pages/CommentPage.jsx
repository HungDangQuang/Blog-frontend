import React from "react";
import HeaderAd from "../components/admin/layout/HeaderAd";
import Navbar from "../components/admin/layout/NarBar";
import "../style/admin.css";
import CommentTable from "../containers/ManagerComment";

function CommentPage() {
  return (
    <>
      <HeaderAd />
      <div className="css_contaner">
        <div className="nar_post">
          <Navbar />
        </div>
        <div className="post_list">
          <CommentTable />
        </div>
      </div>
    </>
  );
}

export default React.memo(CommentPage);
