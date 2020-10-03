import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  return (
    <div className="tc">
      {people.map((person) => {
        return (
          <Card key={person.name} image={person.image} name={person.name} />
        );
      })}
    </div>
  );
};

export default CardList;
