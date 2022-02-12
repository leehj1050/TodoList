import "./todoList.css";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onCheckToggle,
  todosDelete,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          todosDelete={todosDelete}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
}
