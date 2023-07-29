import ToDoItem from "./ToDoItem";

function ToDoList({ toDo, deleteToDo }) {
  return (
    <div
      key={toDo.id}
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      {toDo.map((toDo) => (
        <ToDoItem toDo={toDo} deleteToDo={deleteToDo} />
      ))}
    </div>
  );
}

export default ToDoList;
