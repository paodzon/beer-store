import React from "react";
import { Button as MaterialButton, Spinner } from "@material-tailwind/react";
import clsx from "clsx";
interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  loading?: boolean;
  onClick?: () => Promise<void>;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MaterialButton
      className={clsx(
        `flex w-full h-fit justify-center normal-case rounded-md px-5 py-1.5 text-sm leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary`,
        props.color ? `bg-${props.color}` : 'bg-primary',
        props.textColor ? `text-${props.textColor}` : 'text-white'
      )}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {!props.loading ? (
        props.children
      ) : (
        <div className="flex items-center gap-2">
          <Spinner color="blue" className="h-4 w-4" /> {props.children}...
        </div>
      )}
    </MaterialButton>
  );
};

export default Button;
