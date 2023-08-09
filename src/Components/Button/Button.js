import classes from "./Button.module.css";

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      className={
        type === "primary" || type === "Primary".toLowerCase()
          ? classes.primary
          : classes.secondary
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
