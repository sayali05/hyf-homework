import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

function App() {
  const url =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  const [toDo, setToDo] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setToDo(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  function deleteToDo(toDoId) {
    setToDo(toDo.filter((toDo) => toDo.id !== toDoId));
  }

  function handleAddToDo(description, deadline) {
    const newToDo = {
      id: toDo.length + 1,
      description,
      deadline,
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
