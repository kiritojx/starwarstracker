import React from "react";

export const Header = (props) => {
  return (
    <div className="near-white tc">
      <h1 style={{ margin: "0", padding: "20px" }}>Star Wars Tracker</h1>
      <p>
        Total people: <strong>{props.count}</strong>
      </p>
    </div>
  );
};
