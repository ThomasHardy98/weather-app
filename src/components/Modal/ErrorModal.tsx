import "./ErrorModal.scss";

interface ErrorProps {
  errorText: string;
  onClick: () => void;
}

// Reusable error modal component with custom text and onClick functionality
const ErrorModal = ({ errorText, onClick }: ErrorProps) => {
  return (
    <div className="error-container">
      <div className="error-modal">
        <img
          src="https://100dayscss.com/codepen/alert.png"
          width="44"
          height="38"
        />
        <p>{errorText}</p>
        <div className="button" onClick={onClick}>
          Dismiss
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
