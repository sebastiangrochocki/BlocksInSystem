import React from "react";
import "./Button.scss";
import Badge from "./Badge";

const Button = React.forwardRef(
  (
    {
      disabled,
      showBadge,
      badgeLabel,
      size = "medium",
      variant = "solid",
      onClick,
      onDrop,
      children,
      fluid,
      ...props
    },
    ref
  ) => {
    const sizeClass = `button-${size}`;
    const styleClass = `button-${variant}`;
    const fluidClass = fluid ? "button-fluid" : "";

    return (
      <button
        ref={ref}
        {...props}
        className={`button ${sizeClass} ${styleClass} ${fluidClass}`}
        onClick={onClick}
        onDrop={onDrop}
        disabled={disabled}
      >
        {children}
        {showBadge && <Badge label={badgeLabel} />}
      </button>
    );
  }
);

export default Button;
