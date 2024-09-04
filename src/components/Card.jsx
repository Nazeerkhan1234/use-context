import React, { useContext } from "react";
import { contextData } from "../store/Context";

const Card = () => {
  const {data}= useContext(contextData);
  return (
    <div className="card">
      <h1>Card Component </h1>
      <h2>Data :{data}</h2>
    </div>
  );
};

export default Card;
