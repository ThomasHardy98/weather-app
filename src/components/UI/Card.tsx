import "components/UI/Card.scss";

interface LocationContextProps {
  children: React.ReactNode;
  className?: string;
}

// Reusable card component with optional additional classes
const Card = ({ children, className }: LocationContextProps) => {
  if (className) {
    return <div className={`card ${className}`}>{children}</div>;
  } else {
    return <div className="card">{children}</div>;
  }
};

export default Card;
