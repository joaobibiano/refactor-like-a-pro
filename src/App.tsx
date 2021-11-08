import { FormEvent, useState } from "react";
import styles from "./App.module.css";
import classnames from "classnames";
import { Input } from "./components/Input";
import { useTodoState } from "./hooks/useTodoState";

// [x] variaveis com nomes sem sentido
// [x] funções com nomes sem sentido
// [x] implementar typescript
// [x] css modules
// [x] classnames class conditional
// [x] componentizar o HTML
// [x] hook com MACHINE STATE

function App() {
  const { addTodo, removeTodo, todos, toggleChecked } = useTodoState();
  const [inputValue, setInputValue] = useState("");

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Todo List</h1>

      <form className={styles["todo-form"]} onSubmit={onSubmitHandler}>
        <Input value={inputValue} onChange={setInputValue} />
      </form>

      <div className={styles.items}>
        {todos.map((todo, index) => (
          <div className={styles.row} key={index}>
            <p
              className={classnames({
                [styles["todo-text"]]: true,
                [styles.completed]: todo.completed,
              })}
            >
              {todo.text}
            </p>
            <button
              className={styles["button-todo"]}
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
            <button
              className={styles["button-todo"]}
              onClick={() => toggleChecked(index)}
            >
              {todo.completed ? "Uncheck" : "Check"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
