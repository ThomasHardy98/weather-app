import Card from "../UI/Card";

import "./LastUpdated.scss";

interface LastUpdatedProps {
  localTime: string | undefined;
}

const LastUpdated = ({ localTime }: LastUpdatedProps) => {
  return (
    <div className="last-updated-container">
      <Card className="border-radius">
        <div className="last-updated-text">
          Last updated: {localTime?.substring(0, localTime.lastIndexOf(":"))}{" "}
          (Local time)
        </div>
      </Card>
    </div>
  );
};

export default LastUpdated;
