import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

function App() {
  const [toDo, setToDo] = useState([
    {
      id: 1,
      description: "Get out of bed",
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ]);

  function deleteToDo(toDoId) {
    setToDo(toDo.filter((toDo) => toDo.id !== toDoId));
  }

  function handleAddToDo(description) {
    const newToDo = {
      id: toDo.length + 1,
      description,
    };
    setToDo([...toDo, newToDo]);
  }

  return (
    <div className="App">
      <Header toDo={toDo} />
      <br />
      <ToDoList toDo={toDo} deleteToDo={deleteToDo} />
      <br />
      <AddToDo handleAddToDo={handleAddToDo} />
    </div>
  );
}

export default App;
