import { use, useState } from "react";
import "./card.css";
import task from "../../assets/task.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import Forms from "./Forms";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    description: "",
  });
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className={`box ${clicked ? "clicked" : ""}`}>
      {clicked ? (
        <>
          <Forms
            inputText={inputText}
            setInputText={setInputText}
            tasks={tasks}
            setTasks={setTasks}
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
            Create Task
          </button>
          <div className="imageWrapper">
            <img className="taskImg" src={task} alt="taskImg" />
            <p>No tasks yet</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
