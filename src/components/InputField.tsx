import './style.css';
import { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="input"
        className="input_field"
        placeholder="Write your task"
      />

      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
