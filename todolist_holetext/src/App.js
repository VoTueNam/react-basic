import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState, useCallback, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  //state, props
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagesTodoList = localStorage.getItem('TODO_APP')
    if (storagesTodoList) {
      setTodoList(JSON.parse(storagesTodoList))
    }
  },[])

  useEffect(() => {
    localStorage.setItem("TODO_APP", JSON.stringify(todoList));
  }, [todoList]);

  //useCallback sẽ giúp ko render lại
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        {
          id: v4,
          name: textInput,
          isCompleted: false,
        },
        ...todoList,
      ]);
      setTextInput("");
    },
    [todoList, textInput]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  });

  return (
    <div className="App">
      <h3>List totoList</h3>
      <Textfield
        name="add-todo"
        placeholder="Add work..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </div>
  );
}

export default App;

//Dùng atlassian style để design
//npm i @atlaskit/tên component
