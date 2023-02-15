import "components/UI/Card.scss";

interface LocationContextProps {
  children: React.ReactNode;
}

const Card = ({ children }: LocationContextProps) => {
  return <div className="card">{children}</div>;
};

export default Card;
