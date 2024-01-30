import { Provider, useSelector } from "react-redux";
import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";
import Header from "./components/header";

function App() {
  const { darkMode } = useSelector((state) => state.theme);
  return (
    <div
      className={`w-full h-full pb-10 ${
        darkMode === "dark" ? "bg-gray-900 text-white" : ""
      }`}
    >
      <Header />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
