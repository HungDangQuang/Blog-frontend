import React from "react";
import HeaderAd from "../components/admin/layout/HeaderAd";
import UserTable from "../containers/ManagerUser";
import Navbar from "../components/admin/layout/NarBar";
import "../style/admin.css";
function User() {
  return (
    <>
      <HeaderAd />
      <div className="css_contaner">
        <div className="nar_post">
          <Navbar />
        </div>
        <div className="post_list">
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default React.memo(User);
