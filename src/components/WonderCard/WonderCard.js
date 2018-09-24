import React from "react";
import "./WonderCard.css";

const WonderCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
        onClick={() => props.handleClick(props.id)}
      />
    </div>
  </div>
);

export default WonderCard;
