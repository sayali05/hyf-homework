import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="task">
        <Task />
      </div>
      <Footer />
    </div>
  );
}

export default App;
