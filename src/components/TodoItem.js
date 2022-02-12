import "./todoItem.css";
import { MdCheckCircleOutline, MdCheckCircle, MdDelete } from "react-icons/md";

export default function TodoItem({
  todo,
  onCheckToggle,
  todosDelete,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  /*함수안에서 구조분해 */
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      {/*참이면 className={checked}, 거짓이면 "" 즉 content*/}
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckCircleOutline
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
        <div>
          {checked ? (
            <MdDelete
              onClick={() => {
                todosDelete(id);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
