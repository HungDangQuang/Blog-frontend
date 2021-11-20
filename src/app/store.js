import userReducer from "../redux/reducers/userSlide";
import alertReducer from "../redux/reducers/alertSlide";
import postReducer from "../redux/reducers/productSlide";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    message: alertReducer,
  },
});

export { store };
