import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import widgetReducer from "./widgetSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    widgets: widgetReducer,
  },
});

export default store;
