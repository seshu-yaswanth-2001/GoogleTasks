import { useEffect, useState } from "react";
import task from "../../assets/task.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";

import "./card.css";
import Forms from "./Forms";
import Cards from "../Cards/Cards";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    description: "",
  });
  const [counter, setCounter] = useState(1);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleFilter = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  // It will get the data from the local storage
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (storedTasks) {
  //     setTasks(storedTasks);
  //   }
  // }, []);

  // It will set the data to local storage
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  return (
    <>
      {tasks.length === 0 ? (
        <div className={`box ${clicked ? "clicked" : ""}`}>
          {clicked ? (
            <>
              <Forms
                inputText={inputText}
                setInputText={setInputText}
                setTasks={setTasks}
                counter={counter}
                setCounter={setCounter}
              />
            </>
          ) : (
            <>
              <button className="taskButton" onClick={handleClick}>
                <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                Add a task
              </button>
              <button className="mobileButton" onClick={handleClick}>
                <FontAwesomeIcon className="iconPlus" icon={faPlusSquare} />
                Add a Task
              </button>
              <div className="imageWrapper">
                <img className="taskImg" src={task} alt="taskImg" />
                <p>No tasks yet</p>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="cards">
          {tasks.map((task) => (
            <Cards key={task.id} tasks={task} handleFilter={handleFilter} />
          ))}
        </div>
      )}
    </>
  );
};
export default Card;
