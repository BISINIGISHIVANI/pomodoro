import "./pomodoro.css";
import { useLocation } from "react-router-dom";
import { Pomodoro } from "../../components/timer/pomodoro";
export const PomodoroPage = () => {
  const location = useLocation();
  const {
    id,
    name,
    description,
    timer,
    date,
    time,
    breakTimer,
    priorityTag
  } = location.state;
  return (
    <div key={id} className="flex-row flex-wrap flex-center margin-lg">
      <div>
        <Pomodoro timer={timer} breakTimer={breakTimer} />
      </div>
      <div className="padding-md timer-description flex-col gap">
        <h2>Task name:{name}</h2>
        <p>{description}</p>
        <div>
          <h3 className="timer-label">#{priorityTag} Priority</h3>
        </div>
        <h4 className="margin-top">
          {date},{time}
        </h4>
      </div>
    </div>
  );
};
