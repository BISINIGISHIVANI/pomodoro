import { v4 as uuid } from "uuid";
import { useState } from "react";
import dayjs from "dayjs";
import "./task-modal.css";
const TaskModel = ({
  saveToTaskList,
  isEdit,
  setIsEdit,
  updateTodo,
  setUpdateTodo,
  updateTaskList
}) => {
  const addDate = () => dayjs().format("DD-MM-YYYY");
  const addTime = () => dayjs().format("hh:mm:ss A");
  const date = addDate();
  const time = addTime();
  const [taskData, setTaskData] = useState({
    id: uuid(),
    name: "",
    description: "",
    date,
    time,
    timer: 30,
    breakTimer: 10,
    priorityTag: ""
  });
  const addTaskList = (e) => {
    e.preventDefault();
    saveToTaskList(taskData);
  };
  return (
    <div className="modal-container modal-top">
      <form className="gap flex-col modal-input mg-sm">
        {isEdit ? (
          <>
            <label>Title</label>
            <input
              className="background-none "
              type="text"
              placeholder="update Task title"
              value={updateTodo.name}
              onChange={(e) => {
                setUpdateTodo({ ...updateTodo, name: e.target.value });
              }}
            />
            <label>description</label>
            <textarea
              className="background-none text-area"
              placeholder="update taskDescription"
              value={updateTodo.description}
              onChange={(e) =>
                setUpdateTodo({ ...updateTodo, description: e.target.value })
              }
            />
            <label>Time</label>
            <input
              className="background-none"
              type="number"
              placeholder="Time"
              value={updateTodo.timer}
              onChange={(e) =>
                setUpdateTodo({ ...updateTodo, timer: e.target.value })
              }
            />
            <label>Break Time</label>
            <input
              className="background-none"
              type="number"
              placeholder="Time"
              value={updateTodo.breakTimer}
              onChange={(e) =>
                setUpdateTodo({ ...updateTodo, breakTimer: e.target.value })
              }
            />
            <div className="flex-row">
              <label htmlFor="priority-tag">Tag</label>
              <select
                className="mg-left"
                name="priority-tag"
                id="priority-tag"
                onChange={(e) =>
                  setUpdateTodo({ ...updateTodo, priorityTag: e.target.value })
                }
              >
                <optgroup label="Important">
                  <option value="">None</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </optgroup>
              </select>
            </div>
            <div className="flex-row gap flex-center flex-wrap">
              <button className="primary-btn" onClick={() => setIsEdit(false)}>
                Cancel
              </button>
              <button
                className="primary-btn"
                onClick={() => updateTaskList(updateTodo)}
              >
                update Task
              </button>
            </div>
          </>
        ) : (
          <>
            <label>Title</label>
            <input
              className="background-none"
              type="text"
              placeholder="Task title"
              value={taskData.name}
              onChange={(e) =>
                setTaskData({ ...taskData, name: e.target.value })
              }
            />
            <label>description</label>
            <textarea
              className="background-none text-area"
              placeholder="Task Description"
              value={taskData.description}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
            />
            <label>Time in mins</label>
            <input
              className="background-none"
              type="number"
              placeholder="Time"
              value={taskData.timer}
              onChange={(e) =>
                setTaskData({ ...taskData, timer: e.target.value })
              }
            />
            <label>Break Time in mins</label>
            <input
              className="background-none"
              type="number"
              placeholder="Time"
              value={taskData.breakTimer}
              onChange={(e) =>
                setTaskData({ ...taskData, breakTimer: e.target.value })
              }
            />
            <div className="flex-row">
              <label htmlFor="priority-tag">Tag</label>
              <select
                className="mg-left"
                name="priority-tag"
                id="priority-tag"
                onChange={(e) =>
                  setTaskData({ ...taskData, priorityTag: e.target.value })
                }
              >
                <optgroup label="Important">
                  <option value="">None</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </optgroup>
              </select>
            </div>
            <div className="flex-row gap flex-center flex-wrap">
              <button className="primary-btn" onClick={() => setIsEdit(false)}>
                Cancel
              </button>
              <button className="primary-btn" onClick={(e) => addTaskList(e)}>
                Add Task
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
export { TaskModel };
