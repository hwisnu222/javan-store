import { configureStore } from "@reduxjs/toolkit";

import buyReducer from "./reducers/carts/buySlice";

export default configureStore({
  reducer: {
    buy: buyReducer,
  },
});
