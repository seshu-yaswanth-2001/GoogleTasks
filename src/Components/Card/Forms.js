import { useState, useEffect } from "react";
import "./form.css";

const Forms = ({ inputText, setInputText, setTasks, counter, setCounter }) => {
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

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
    let hasError = false;
    let newErrors = { title: "", description: "" };

    if (!inputText.title.trim()) {
      newErrors.title = "Title is required.";
      hasError = true;
    }

    if (!inputText.description.trim()) {
      newErrors.description = "Description is required.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

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
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={inputText.title}
          onChange={(e) =>
            setInputText({ ...inputText, title: e.target.value })
          }
          placeholder=" "
        />
        <label className="title">Title</label>
        {errors && <p className="error">{errors.title}</p>}
      </div>
      <div className="textarea-container">
        <textarea
          rows="2"
          className="textarea"
          value={inputText.description}
          onChange={(e) =>
            setInputText({ ...inputText, description: e.target.value })
          }
          placeholder=" "
        />
        <label className="description">Description</label>
        {errors && <p className="error">{errors.description}</p>}
      </div>
      <button className="add" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Forms;
