import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="lds-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
