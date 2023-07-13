import React from "react";
import { FaPlus } from "react-icons/fa";

const Mealmenu = () => {
  return (
    <div className="card-container">
      <div className="meal">
        <h3 className="day-name">Monday</h3>
        <input
          type="text"
          className="meal-input"
          placeholder="Breakfast"></input>
        <button className="snack-button">
          <span className="snack-text">Snack</span>
          <FaPlus style={{ width: "24px", height: "24px" }} />
        </button>
        <input type="text" className="meal-input" placeholder="Lunch"></input>
        <button className="snack-button">
          <span className="snack-text">Snack</span>
          <FaPlus style={{ width: "24px", height: "24px" }} />
        </button>
        <input type="text" className="meal-input" placeholder="Dinner"></input>
        <button className="snack-button">
          <span className="snack-text">Snack</span>
          <FaPlus style={{ width: "24px", height: "24px" }} />
        </button>
      </div>
    </div>
  );
};

export default Mealmenu;
