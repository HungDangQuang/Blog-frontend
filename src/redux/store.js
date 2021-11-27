import userReducer from "./reducers/userSlide";
import alterReducer from "./reducers/alertSlide";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: userReducer,
    message: alterReducer,
  },
});

export { store };
