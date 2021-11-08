import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([
    {
      t: "Learn React",
      c: false,
    },
  ]);
  const [ip, setIp] = useState("");

  function i(ev) {
    ev.preventDefault();
    setState([
      ...state,
      {
        t: ip,
        c: false,
      },
    ]);
    setIp("");
  }

  function r(i) {
    const t = [...state];
    t.splice(i, 1);
    setState(t);
  }

  function t(i) {
    const s = [...state];
    s[i].c = !s[i].c;
    setState(s);
  }

  return (
    <div className="background">
      <h1>Todo List</h1>

      <form className="todo-form" onSubmit={i}>
        <input
          className="todo-input"
          type="text"
          value={ip}
          onChange={(ev) => setIp(ev.target.value)}
          name="todo"
          placeholder="What needs to be done?"
        />
      </form>

      <div className="items">
        {state.map((i, x) => (
          <div className={"row"} key={x}>
            <p className={`todo-text ${i.c ? "completed" : ""}`}>{i.t}</p>
            <button onClick={() => r(x)}>Remove</button>
            <button onClick={() => t(x)}>{i.c ? "Uncheck" : "Check"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
