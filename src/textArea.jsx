export default function TextArea({
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
    <textarea
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
  );
}
