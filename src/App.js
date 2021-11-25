import React from "react";

import { BrowserRouter } from "react-router-dom";
import { getUser } from "./redux/reducers/userSlide";
import WithRouter from "./router/WithRouter";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  dispatch(getUser());
  return (
    <>
      <BrowserRouter>
        <WithRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
