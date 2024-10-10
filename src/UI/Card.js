import React from "react";

export const Card = ({ name, content, image, onClick }) => {
  return (
    <div style={{ padding: "10px" }} className="card" onClick={onClick}>
      {image && <img src={image} alt={name} className="card-image" />}
      <h2 className="card-name">{name}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};
