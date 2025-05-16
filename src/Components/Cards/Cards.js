import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Cards = ({ title, description }) => {
  return (
    <div className="card">
      <div className="tools">
        <span className="date">16/05/2025</span>
        <button className="trashButton">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>

      <div className="task">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
