import { FC } from "react";
type ButtonProps = {
  increment: number;
  onClickFunction: (increment: number) => void;
};
const Button: FC<ButtonProps> = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return <button onClick={handleClick}>+{increment}</button>;
};

export default Button;
