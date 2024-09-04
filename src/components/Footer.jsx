import React, { useContext } from "react";
import { contextData } from "../store/Context";

const Footer = () => {
  const { user } = useContext(contextData);
  return (
    <div className="footer">
      <h1>Footer component</h1>
      <h2 className="footer"> {user}</h2>
    </div>
  );
};

export default Footer;
