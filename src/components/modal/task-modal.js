import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./task-modal.css"
const TaskModal = ({
  saveToTaskList,
  isEdit,
  setIsEdit,
  updateTodo,
  setUpdateTodo,
  updateTaskList
}) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskTimer, setTaskTimer] = useState(30);

  const addTaskList = (e) => {
    e.preventDefault()
    const task = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
      timer: taskTimer
    };
      saveToTaskList(task);
  };
  return (
    <div className="modal-container">
      <form className="gap flex-col modal-input mg-sm ">
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
            <div className="flex-row gap flex-center flex-wrap">
              <button
                className="primary-btn"
                onClick={() => setIsEdit(false)}
              >
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
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <label>description</label>
            <textarea
              className="background-none text-area"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <label>Time</label>
            <input
              className="background-none"
              type="number"
              placeholder="Time"
              value={taskTimer}
              onChange={(e) => setTaskTimer(e.target.value)}
            />
            <div className="flex-row gap flex-center flex-wrap">
              <button 
              className="primary-btn" 
              onClick={() => setIsEdit(false)}>
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
export { TaskModal };
