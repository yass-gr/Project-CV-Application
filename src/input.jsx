import { useState } from "react";

export default function Input({
  name,
  type,
  className,
  placeholder,
  state,
  setState,
}) {
  const [val, setVal] = useState("");

  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
        setState({ ...state, name: val });
      }}
    />
  );
}
