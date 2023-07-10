import React from "react";
import { RxPlus } from "react-icons/fa";

const Mealmenu = () => {
  return (
    <div className="meal">
      <h3>Monday</h3>
      <input type="text" class="meal-input" placeholder="Breakfast"></input>
      <br />
      <button className="snack-button">
        <span className="snack-text">Snack</span>
        <span className="plus-sign">
          <RxPlus />
        </span>
      </button>
      <br />
    </div>
  );
};

export default Mealmenu;
