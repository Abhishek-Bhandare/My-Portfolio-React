import React, { useContext } from "react";
import { AiFillInstagram } from "react-icons/ai";
import userContext from "../utils/userContext";
const Instagram = () => {
  const { instagram } = useContext(userContext);
  return (
    <a href={instagram} rel="external noreferrer" target="_blank">
      <AiFillInstagram />
    </a>
  );
};

export default Instagram;