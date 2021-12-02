import React from "react";
//Component
import Navigation from "../components/navigation/Index";
import ViewDetail from "../components/detail/ViewDetail";
import Footer from "../components/footer/Index";
import "../style/container.css";
const View = () => {
  return (
    <>
      <Navigation />
      <div className="rootmaster">
        <div className="containerDetail">
          <div className="spaceDetail">
            <ViewDetail />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default React.memo(View);
