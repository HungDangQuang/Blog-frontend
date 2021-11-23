import HeaderAd from "../components/admin/layout/HeaderAd";
import Update from "../components/create/Update";
import Navbar from "../components/admin/layout/NarBar";
import "../style/admin.css";
export default function Admin() {
  return (
    <>
      <HeaderAd />
      <div className="css_contaner">
        <div className="nar_post">
          <Navbar />
        </div>
        <div className="post_list">
          <Update />
        </div>
      </div>
    </>
  );
}
