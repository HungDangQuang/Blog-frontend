import React from "react";
import { BrowserRouter } from "react-router-dom";
import history from "./helper/history";

import WithRouter from "./router/WithRouter";
const App = () => {
  return (
    <BrowserRouter history={history}>
      <WithRouter />
    </BrowserRouter>
  );
};

export default App;
