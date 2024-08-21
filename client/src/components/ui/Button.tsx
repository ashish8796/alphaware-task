import React from "react";

type ButtonType = "submit" | "reset" | "button";
interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ type = "button", onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      Submit
    </button>
  );
};

export default Button;
