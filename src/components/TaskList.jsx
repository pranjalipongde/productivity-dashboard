import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "../store/taskSlice";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName("");
    }
  };

  return (
    <div className="bg-primary p-4 rounded-md shadow-lg">
      <h1 className="text-xl font-semibold text-accent mb-4">Task Manager</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="New Task"
          className="border border-gray-300 p-2 rounded-md flex-grow"
        />
        <button
          onClick={handleAddTask}
          className="bg-accent text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                className="mr-2"
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.name}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
