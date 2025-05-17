import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Cards = ({ tasks, handleFilter }) => {
  return (
    <div className="card">
      <div className="tools">
        <span className="date">16/05/2025</span>
        <button className="trashButton" onClick={() => handleFilter(tasks.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>

      <div className="task">
        <h4>{tasks.title}</h4>
        <p>{tasks.description}</p>
      </div>
    </div>
  );
};

export default Cards;
