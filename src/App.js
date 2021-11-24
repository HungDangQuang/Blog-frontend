import React from "react";
import { BrowserRouter } from "react-router-dom";

import WithRouter from "./router/WithRouter";
const App = () => {
  return (
    <BrowserRouter>
      <WithRouter />
    </BrowserRouter>
  );
};

export default App;
