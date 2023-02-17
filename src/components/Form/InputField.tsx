import "./InputField.scss";

interface InputFieldProps {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
}

// Custom reusable input field component
const InputField = ({
  onChange,
  name,
  placeholder,
  value = "",
}: InputFieldProps) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
      spellCheck="false"
    />
  );
};

export default InputField;
