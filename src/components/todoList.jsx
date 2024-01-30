import { useSelector } from "react-redux";
import TodoItem from "./todoItem";

function TodoList() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="container h-screen px-4">
      <div className="my-10 space-y-3">
        {todos.map((todo) => {
          return <TodoItem {...todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
