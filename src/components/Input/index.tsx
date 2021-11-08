import styles from "./input.module.css";

type InputProps = {
  value: string;
  onChange(value: string): void;
};

export const Input = ({ onChange, value }: InputProps) => {
  return (
    <input
      className={styles["todo-input"]}
      type="text"
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      name="todo"
      placeholder="What needs to be done?"
    />
  );
};
