import { useState, useEffect } from "react";
import "./form.css";

const Forms = ({ inputText, setInputText, setTasks, counter, setCounter }) => {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const handlePress = (event) => {
      if (
        inputText.title.length > 0 &&
        inputText.description.length > 0 &&
        event.key === "Enter"
      ) {
        addTask();
      }
    };

    document.addEventListener("keydown", handlePress);

    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [inputText]);

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => setSubmit(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [submit]);

  const addTask = () => {
    if (inputText.title && inputText.description) {
      const taskToDo = {
        id: counter,
        ...inputText,
      };

      setTasks((prev) => [...prev, taskToDo]);
      setCounter((prev) => prev + 1);
      setInputText({
        title: "",
        description: "",
      });
      setSubmit(true);
    }
  };

  return (
    <div className="inputs">
      <input
        className="input"
        type="text"
        placeholder="title"
        value={inputText.title}
        onChange={(e) => setInputText({ ...inputText, title: e.target.value })}
      />
      <textarea
        rows="2"
        className="input"
        type="text"
        placeholder="description"
        value={inputText.description}
        onChange={(e) =>
          setInputText({ ...inputText, description: e.target.value })
        }
      />
      <button className="add" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Forms;
