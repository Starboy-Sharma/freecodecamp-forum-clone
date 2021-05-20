import React, { useState, createContext } from "react";

export const SubForumContext = createContext();

export const SubForumProvider = (props) => {
  const [subForums, setSubForums] = useState([]);
  return <SubForumContext.Provider value={[subForums, setSubForums]}>{props.children}</SubForumContext.Provider>;
};
