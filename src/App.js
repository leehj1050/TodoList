import { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { AiFillPlusCircle } from "react-icons/ai";
import Todoinsert from "./components/Todoinsert";

/* 함수안에 있으면 리랜더링 될때마다 원래값으로 돌아감*/
let nextId = 1;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  let [todos, setTodos] = useState([
    {
      id: 0,
      text: "할일 1",
      checked: false,
    },
  ]);

  const onInsertToggle = () => {
    /*이전값 prev*/
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };
  console.log(todos);

  /*체크표시 만들기*/
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  /*삭제버튼 눌렀을때 삭제*/
  const todosDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    /*filter는 true false를 필터링하는 함수인데 todo.id 와 클릭했을때 받은 인자 id가 같지않은 것만 리턴 */
    /* todo.id 와 id가 일치하지 않는 것만 보여주겠다! */
    console.log(todos);
  };

  /* text눌렀을때 원래 글자 나와았기 */
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  /*수정하는 구간*/
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length}>
      {/*여기에 적은 텍스트가 칠드런에 들어간다*/}
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        todosDelete={todosDelete}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      {/* 밑에 추가버튼*/}
      <div className="addButton" onClick={onInsertToggle}>
        <AiFillPlusCircle />
      </div>
      {insertToggle && (
        <Todoinsert
          onUpdate={onUpdate}
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </Template>
  );
}

export default App;
