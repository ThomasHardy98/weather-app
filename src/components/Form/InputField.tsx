type Props = {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
};

const InputField = ({ onChange, name, placeholder, value = "" }: Props) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputField;
