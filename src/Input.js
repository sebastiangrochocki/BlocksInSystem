import React from "react";
import "./Input.scss";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Input = ({
  pattern,
  label = "First name",
  placeholder = "Enter first name",
  errormsg = "Invalid format.",
  type = "text",
  value,
  onChange,
  className,
  disabled,
  onClick,
  validation,
  // hideLabel = false,
}) => {
  const isSearchInput = type === "search";
  return (
    <div
      className={`inputfield ${isSearchInput ? "inputSearch" : ""} ${
        className || ""
      }`}
      disabled={disabled}
    >
      {isSearchInput && <MagnifyingGlassIcon />}
      <input
        pattern={pattern}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {type !== "number" && <label>{label}</label>}
      {errormsg !== false && <p>{errormsg}</p>}

      {type !== "number" && type !== "date" && validation !== false && (
        <span></span>
      )}
    </div>
  );
};

export default Input;
