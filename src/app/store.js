import userReducer from "../redux/reducers/userSlide";
import alertReducer from "../redux/reducers/alertSlide";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: userReducer,
    message: alertReducer,
  },
});

export { store };
