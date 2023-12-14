import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";

export interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = ({
  primary = false,
  size = "medium",
  ...props
}: ButtonProps) => {
  const dispatch = useDispatch();
  const mode = primary ? "btn--primary" : "btn--secondary";
  const action = primary ? {type: "counter/increment"} : {type: "counter/decrement"};

  return (
    <button className={`btn btn--${size} ${mode}`} onClick={() => dispatch(action)} {...props}>
      {primary ? "Increment" : "Decrement"}
    </button>
  );
};

export default Button;
