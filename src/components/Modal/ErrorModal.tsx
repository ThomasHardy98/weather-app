type ErrorProps = {
  errorText: string;
};

const ErrorModal = ({ errorText }: ErrorProps) => {
  // Set error false on modal clear
  return <div>{errorText}</div>;
};

export default ErrorModal;
