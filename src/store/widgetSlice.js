import { createSlice } from "@reduxjs/toolkit";

const initialWidgets = [
  { id: 1, name: "Pomodoro Timer", visible: true },
  { id: 2, name: "Task List", visible: true },
];

const widgetSlice = createSlice({
  name: "widgets",
  initialState: initialWidgets,
  reducers: {
    toggleWidget: (state, action) => {
      const widget = state.find((w) => w.id === action.payload);
      if (widget) widget.visible = !widget.visible;
    },
  },
});

export const { toggleWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
