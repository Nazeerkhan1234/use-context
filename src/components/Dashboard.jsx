import React, { useContext } from "react";
import Profile from "./Profile";
import { contextData } from "../store/Context";

const Dashboard = () => {
  const { data } = useContext(contextData);
  return (
    <div className="dashboard">
      <h1>Dasboard</h1>
      <h2>{data}</h2>
      <Profile></Profile>
    </div>
  );
};

export default Dashboard;
