import { useSelector } from "react-redux";
import "./App.css";
import PomodoroTimer from "./components/PomodoroTimer";
import WidgetToggler from "./components/WidgetToggler";
import TaskList from "./components/TaskList";

function App() {
  const widgets = useSelector((state) => state.widgets);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-accent mb-6">
        Productivity Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-lightpink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold text-accent mb-4">
            Widget Settings
          </h2>
          <WidgetToggler />
        </div>

        {widgets.find((w) => w.name === "Pomodoro Timer" && w.visible) && (
          <div className="bg-lightpink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-accent mb-4">
              Pomodoro Timer
            </h2>
            <PomodoroTimer />
          </div>
        )}

        {widgets.find((w) => w.name === "Task List" && w.visible) && (
          <div className="bg-lightpink p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-accent mb-4">Task List</h2>
            <TaskList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
