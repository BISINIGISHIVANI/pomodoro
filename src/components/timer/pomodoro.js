import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Pomodoro = ({ timer, breakTimer }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTaskTime, setIsTaskTime] = useState(true);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [key, setKey] = useState(1);
  timer *= 60;
  breakTimer *= 60;
  const addZeroSingleDigit = (num) => (num < 10 ? "0" + num : num);
  const renderTaskTime = ({ remainingTime }) => {
    const mins = addZeroSingleDigit(Math.floor((remainingTime % 3600) / 60));
    const seconds = addZeroSingleDigit(Math.floor(remainingTime % 60));
    document.title = `⏰ ${mins}m:${seconds}s 👨🏾‍💻(task)`;
    return (
      <div className="timer-display">
        <h3>Task</h3>
        <p>
          {mins} m: {seconds} s
        </p>
        {isPlaying ? <p>out of {timer / 60} min</p> : <p>Paused</p>}
      </div>
    );
  };
  const renderBreakTime = ({ remainingTime }) => {
    const mins = addZeroSingleDigit(Math.floor((remainingTime % 3600) / 60));
    const seconds = addZeroSingleDigit(Math.floor(remainingTime % 60));
    document.title = `🧎🏾 ${mins}m:${seconds}s 🤹🏿‍♂️(break)`;
    return (
      <div className="timer-display">
        <h3>
          Break<i className="fa fa-cup"></i>
        </h3>
        <p>
          {mins} m: {seconds} s
        </p>
        {isBreakTime ? <p>out of {breakTimer / 60} min</p> : <p>Paused</p>}
      </div>
    );
  };
  const taskCompletionHandler = () => {
    setIsTaskTime(false);
    setIsBreakTime(true);
  };
  const taskRestartHandler = () => setIsTaskTime(true);
  return (
    <div>
      {isTaskTime && (
        <div className="flex-col flex-center">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            size={320}
            duration={timer}
            colors={["#6EBF8B", "#6EBF8B", "#FF0000", "#FF0000"]}
            colorsTime={[timer, timer / 4, timer / 6, 0]}
            key={key}
            onComplete={taskCompletionHandler}
          >
            {({ remainingTime }) => renderTaskTime({ remainingTime })}
          </CountdownCircleTimer>
          {/*  timer controllers */}
          <div className="mg-lft mg-top flex-row gap place-center">
            {!isPlaying ? (
              <i
                className="fa fa-2x fa-pause-circle cursor-pointer"
                onClick={() => setIsPlaying(false)}
              ></i>
            ) : (
              <i
                className="fa fa-2x fa-pause-circle-o cursor-pointer icon-color"
                onClick={() => setIsPlaying(false)}
              ></i>
            )}
            {isPlaying ? (
              <i
                className="fa fa-2x fa-play-circle cursor-pointer"
                onClick={() => setIsPlaying(true)}
              ></i>
            ) : (
              <i
                className="fa fa-2x fa-play-circle-o cursor-pointer"
                onClick={() => setIsPlaying(true)}
              ></i>
            )}
            <i
              className="fa fa-2x fa-repeat cursor-pointer"
              onClick={() => setKey(key + 1)}
            ></i>
          </div>
        </div>
      )}
      {isBreakTime && (
        <div>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          size={320}
          duration={breakTimer}
          colors={["#6EBF8B", "#6EBF8B", "#FF0000", "#FF0000"]}
          colorsTime={[breakTimer, breakTimer / 4, breakTimer / 6, 0]}
          key={key + 1}
          onComplete={() => setIsBreakTime(false)}
        >
          {({ remainingTime }) => renderBreakTime({ remainingTime })}
        </CountdownCircleTimer>
        {/*  timer controllers */}
          <div className="mg-lft mg-top flex-row gap place-center">
            {!isPlaying ? (
              <i
                className="fa fa-2x fa-pause-circle cursor-pointer"
                onClick={() => setIsPlaying(false)}
              ></i>
            ) : (
              <i
                className="fa fa-2x fa-pause-circle-o cursor-pointer icon-color"
                onClick={() => setIsPlaying(false)}
              ></i>
            )}
            {isPlaying ? (
              <i
                className="fa fa-2x fa-play-circle cursor-pointer"
                onClick={() => setIsPlaying(true)}
              ></i>
            ) : (
              <i
                className="fa fa-2x fa-play-circle-o cursor-pointer"
                onClick={() => setIsPlaying(true)}
              ></i>
            )}
            <i
              className="fa fa-2x fa-repeat cursor-pointer"
              onClick={() => setKey(key + 1)}
            ></i>
          </div>
        </div>
      )}
      {/* after completion time show restart button */}
      {!isTaskTime && !isBreakTime && (
        <div className="restart-container">
          <button
            className="secondary-btn cursor-pointer position-absolute align-md"
            onClick={taskRestartHandler}
          >
            Restart
          </button>
          <Link to="/tasks">
            <button className="primary-btn position-absolute align-lft">
              Go to Tasks
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
