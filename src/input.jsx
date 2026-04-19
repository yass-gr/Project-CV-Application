export default function Input({
  label = "",
  labelClass = "",
  name,
  type,
  className,
  placeholder,
  value,
  onChange,
  state,
  setState,
}) {
  const inputValue = value ?? state?.[name] ?? "";

  return (
    <>
      {label ? (
        <label htmlFor={name} className={labelClass ?? ""}>
          {" "}
          {label}{" "}
        </label>
      ) : (
        ""
      )}
      <input
        required
        id={name}
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
          if (setState && state) {
            setState({ ...state, [name]: e.target.value });
          }
        }}
      />
    </>
  );
}
