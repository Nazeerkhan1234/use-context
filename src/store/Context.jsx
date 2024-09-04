import { createContext } from "react";
export const contextData = createContext();

const ContextProvider = ({ children }) => {
  let data = "khanbhai@gmail.com";
  let user="khan bhai"
  return <contextData.Provider value={{data,user}}>{children}</contextData.Provider>;
};
export default ContextProvider;
