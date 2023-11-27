import { FC } from "react";
import { InitialMessageProps } from "./index.types";
import "./index.css";

const InitialMessage: FC<InitialMessageProps> = () => {
  return (
    <div className="initial-message">
      <img src="logo.png" alt="logo" />
      <h3></h3>
      <p></p>
    </div>
  );
};

export default InitialMessage;
