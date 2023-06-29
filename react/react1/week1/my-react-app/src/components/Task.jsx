import React from "react";
import { todolist } from "../components/TodoList";

function TaskList(props) {
  return (
    <ul>
      <li>{props.todo}</li>
      <li>{props.time}</li>
    </ul>
  );
}

function Task() {
  return todolist.map((todoli) => {
        return <TaskList todo={todoli.todo} time={todoli.time} key={todoli.id} />;
      })
    }

export default Task;
