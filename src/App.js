import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TodoList from "./components/TodoList";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const localListTodo = localStorage.getItem("TODO_APP");
    if (localListTodo) {
      setTodoList(JSON.parse(localListTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TODO_APP", JSON.stringify(todoList));
  }, [todoList]);

  const handleInput = useCallback((e) => {
    setInputText(e.target.value);
  }, []);

  const addBtnTodo = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: inputText, isCompleted: false },
        ...todoList,
      ]);

      setInputText("");
    },
    [todoList, inputText]
  );

  const btnCheckTodo = (id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  const btnDeleteTodo = (id) => {
    const removeTodo = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(removeTodo);
  };

  return (
    <div className="App">
      <>
        <h3>Danh sách cần làm</h3>
        <TextField
          name="app-todo"
          placeholder="Thêm việc cần làm..."
          elemAfterInput={
            <Button
              onClick={addBtnTodo}
              isDisabled={!inputText}
              appearance="primary"
            >
              Thêm
            </Button>
          }
          css={{ padding: "2px 4px 2px" }}
          value={inputText}
          onChange={handleInput}
        ></TextField>
        <TodoList
          btnDeleteTodo={btnDeleteTodo}
          btnCheckTodo={btnCheckTodo}
          todoList={todoList}
        ></TodoList>
      </>
    </div>
  );
}

export default App;
