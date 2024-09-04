import React, { useContext } from "react";
import Card from "./Card";
import { contextData } from "../store/Context";

const Profile = () => {
  const { user } = useContext(contextData);
  return (
    <div className="profile">
      {" "}
      <h1>Profile Component</h1>
      <h2>profile data :{user}</h2>
      <Card></Card>
    </div>
  );
};

export default Profile;
