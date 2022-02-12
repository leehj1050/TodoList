import "./todoinsert.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";

export default function Todoinsert({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onUpdate,
}) {
  const [value, setValue] = useState("");
  const onchange = (e) => {
    setValue(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onsubmit
        }
      >
        <input
          placeholder="할 일을 입력하세요."
          onChange={onchange}
          value={value}
          autoFocus
        />
        {selectedTodo ? (
          <button>
            <BiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
          </button>
        ) : (
          <button type="submit">
            <AiFillPlusCircle />
          </button>
        )}
      </form>
    </div>
  );
}
