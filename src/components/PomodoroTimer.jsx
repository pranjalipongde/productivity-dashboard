import React, { useState, useEffect } from "react";

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60); // Initial time (25 minutes)
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true); // Track session type

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(isWorkSession ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    if (time === 0) {
      setIsWorkSession(!isWorkSession); // Switch session
      setTime(isWorkSession ? 5 * 60 : 25 * 60); // Reset based on session type
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, isWorkSession]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-primary p-6 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold text-accent mb-4">
        {isWorkSession ? "Work Session" : "Break Session"}
      </h2>
      <div className="text-4xl font-mono mb-6">{formatTime(time)}</div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className="bg-accent text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
