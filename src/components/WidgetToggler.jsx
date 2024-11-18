import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWidget } from "../store/widgetSlice";

function WidgetToggler() {
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets);

  return (
    <div className="bg-primary p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-accent mb-4">Widget Settings</h2>
      <ul>
        {widgets.map((widget) => (
          <li
            key={widget.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{widget.name}</span>
            <button
              onClick={() => dispatch(toggleWidget(widget.id))}
              className={`px-4 py-2 rounded-md ${
                widget.visible
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {widget.visible ? "Hide" : "Show"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetToggler;
